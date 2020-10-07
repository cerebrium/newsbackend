import { Request, Response } from "express";
import axios from "axios"

export const index = (req: Request, res: Response) => {
    // interface for source
    interface NewsSource {
        id: number | null
        name: string
    }

    // interface for the data
    interface NewsData {
        source: NewsSource
        author: string
        title: string
        description: string
        urlToImage: string
        publishedAt: string
        content: string
    }

    // interface for response
    interface ApiResponse {
        status: string
        totalResults: number
        articles: NewsData[]
    }

    const getData = (url:string) => {
        axios.get<ApiResponse>(url).then( response => {
            // tslint:disable-next-line:no-console
            console.log(response.data)
            res.status(200).send(response.data)
            return response.data
        })
    }

    getData('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-07&sortBy=publishedAt&apiKey=28302bdeeaec4bfcbeb7fe7a7ab97a84')
};