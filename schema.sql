-- user joins for tables relationships

CREATE TABLE products (
  product_id INTEGER,
)

CREATE TABLE questions (
  question_id INTEGER,
  created_at TIME,
  user VARCHAR,
  question_body VARCHAR,
  product_id INTEGER,
)

CREATE TABLE answers (
  answer_id INTEGER PRIMARY KEY,
  created_at TIME,
  user VARCHAR,
  answer_body VARCHAR,
  helpful_yes INTEGER,
  helpful_no INTEGER,
  question_id INTEGER,
)