-- user joins for tables relationships

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