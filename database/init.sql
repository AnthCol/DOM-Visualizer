CREATE TABLE IF NOT EXISTS files (
    name    TEXT PRIMARY KEY,
    content TEXT
);


DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM files) THEN
        INSERT INTO files (name, content) VALUES
            ('MyFirstFile.html', '<abbr>');
    END IF;
END $$;


