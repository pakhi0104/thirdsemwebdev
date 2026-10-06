import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
const bookData = JSON.parse(fs.readFileSync("./data/books.json", "utf-8"));
const count = bookData.length();

app.get("/api/v1/books", (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            count: count,
            data: {
                book: bookData
            }
        })
    } catch(error) {
        res.status(404).json({
            status: "fail",
            message: "data not found"
        })
    }
})

app.get("/api/v1/books/:id", (req, res) => {
    // 1) linear search
    // for(let i = 0; i < bookData.length; i++) {
    //     if(bookData[i].id == id) {
    //         res.status(200).json({
    //             status: "success",
    //             data: {
    //                 book: bookData[i]
    //             }
    //         })
    //     }
    // }
    // 2) function
    try{
        let id = req.params.id;
        const book = bookData.find((book) => book.id === id);
        if(!book) {
            res.status(404).json({
                status: "fail",
                message: "book not found for this id"
            })
        } else {
            res.status(200).json({
                status: "success",
                data: {
                    book: book
                }
            })   
        }
    } catch(error) {
        res.status(404).json({
            status: "fail",
            message: "data not found"
        })
    }
})

app.post("/api/v1/books", (req, res) => {
    bookData.push(req.body);
    fs.writeFileSync("./data/books.json", JSON.stringify(bookData));
    res.status(201).json({
        status: "success",
        data: {
            book: req.body
        }
    })
})

app.patch("/api/v1/books/:id", (req, res) => {
    let {id} = req.params; // object destructing
    const bookToUpdate = bookData.find((book) => book.id === id);
    let index = bookData.indexOf(bookToUpdate);
    const updateBook = Object.assign(bookToUpdate, req.body);
    bookData[index] = updateBook;
    res.status(200).json({
        status: "success",
        data: {
            book: updateBook,
            message: "book updated successfully"
        }
    });
})
app.delete("/api/v1/books/:id", (req, res) => {
    const deleteBook = bookData.find(book =>book.id === req.params.id)
    const books= bookData.filter(book => book.id !== req.params.id)
    fs.writeFileSync("./data/books.json", JSON.stringify(books));
    res.status(200).json({
        status: "success",
        message: "book deleted successfully"
    });
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running ...");
})