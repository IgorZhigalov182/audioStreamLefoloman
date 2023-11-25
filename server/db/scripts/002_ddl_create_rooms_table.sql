CREATE TABLE IF NOT EXISTS rooms (
    id              serial      PRIMARY KEY,
    name            text        NOT NULL,
    description     text        NOT NULL,
    moderator_id    integer     NOT NULL    REFERENCES clients(id),
    UNIQUE (id, moderator_id)
);