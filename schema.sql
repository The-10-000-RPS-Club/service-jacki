-- POSTGRESQL SCHEMA

CREATE TABLE products (
  product_id INTEGER
)

CREATE TABLE questions (
  question_id INTEGER,
  created_at TIMESTAMP,
  user_name VARCHAR (50),
  question_body VARCHAR (255),
  product_id INTEGER
)

CREATE TABLE answers (
  answer_id INTEGER,
  created_at TIMESTAMP,
  user_name VARCHAR (50),
  answer_body VARCHAR (255),
  helpful_yes INTEGER,
  helpful_no INTEGER,
  question_id INTEGER
)

-- CASSANDRA SCHEMA

CREATE TABLE tester.all (
  primary_id INT,
  parent_id INT,
  product_id INT,
  created_at TIMESTAMP,
  last_modified_at TIMESTAMP,
  author_username VARCHAR,
  text_value VARCHAR,
  helpful_yes INT,
  helpful_no INT,
  is_deleted BOOLEAN,
  PRIMARY KEY (primary_id)
)

CREATE INDEX all.products
  ON QnA.all (product_id);

CREATE INDEX all.parent
  ON QnA.all (parent_id);