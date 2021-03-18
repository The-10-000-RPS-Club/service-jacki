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

CREATE TABLE main.qna_records (
  primary_id INT,
  parent_id INT,
  product_id INT,
  created_at TEXT,
  last_modified_at TEXT,
  author_username TEXT,
  text_value TEXT,
  helpful_yes INT,
  helpful_no INT,
  is_deleted BOOLEAN,
  PRIMARY KEY ((product_id, parent_id), primary_id)
) --edit Primary key, add COMPOSITE KEY(PARTITION KEYS), CLUSTER KEYS)

CREATE INDEX QnA_products_idx
  ON main.QnA_records (product_id);

CREATE INDEX QnA_parent_idx
  ON main.QnA_records (parent_id);

COPY QnA_records
FROM '/Users/jacki/Desktop/cassandra_data2.csv'
WITH HEADER = TRUE;

COPY main.QnA_records (primary_id,author_username,created_at,helpful_no,helpful_yes,is_deleted,last_modified_at,parent_id,product_id,text_value)
FROM '/home/ubuntu/service-jacki/cassandra_data_aws.csv'
WITH HEADER = TRUE;

SELECT * FROM main.QnA_records;