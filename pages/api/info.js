
export default async function handler(req, res) {
    if (req.method === "POST") {
        res.status(200).json({ success: true, message: "Blog API: POST request" })
    }
    if (req.method === "GET") {
        return res.status(200).json({ success: true, message: "Blog API: GET request" })
    }
}