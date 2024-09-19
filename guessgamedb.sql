CREATE DATABASE IF NOT EXISTS guess_game;

USE guess_game;

CREATE TABLE IF NOT EXISTS highscore (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    player_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


INSERT INTO highscore (score, player_name) VALUES (10, 'Alice');
INSERT INTO highscore (score, player_name) VALUES (5, 'Bob');