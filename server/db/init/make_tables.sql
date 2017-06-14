  CREATE TABLE IF NOT EXISTS ideas (
    id SERIAL PRIMARY KEY,
    title text UNIQUE NOT NULL,
    idea text NOT NULL,
    fact_id INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS facts (
    fact_id SERIAL PRIMARY KEY,
    info text
  );
