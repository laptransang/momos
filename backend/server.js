require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const { Client } = require("@notionhq/client");

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_SECRET;

const notion = new Client({
  auth: notionSecret,
});

app.use(cors());
app.use(express.json()); 

app.post('/notion', async (req, res) => {
  try {
    const { sorts = [] } = req.body || {};
    console.log('sorts', sorts)
    const response = await notion.databases.query({
      database_id: notionDatabaseId,
      sorts,
    });
    const data = response.results.map((item) => item.properties);

    // console.log('sorts--', sorts);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from Notion');
  }
});

app.get('/notion-fields', async (req, res) => {
  try {
    const response = await notion.databases.retrieve({ database_id: notionDatabaseId });
    const properties = response.properties;

    res.json(response.properties);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching database fields from Notion');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});