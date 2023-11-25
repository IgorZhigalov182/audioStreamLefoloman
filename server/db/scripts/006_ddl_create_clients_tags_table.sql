CREATE TABLE IF NOT EXISTS clients_tags (
    id          serial      PRIMARY KEY,
    client_id   integer     NOT NULL    REFERENCES clients(id),
    tag_id      integer     NOT NULL    REFERENCES tags(id)
);