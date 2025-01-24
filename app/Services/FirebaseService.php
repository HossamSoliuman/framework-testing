<?php

namespace App\Services;

use Kreait\Firebase\Factory;

class FirebaseService
{
    protected $database;

    public function __construct()
    {
        $this->database = (new Factory)
            ->withServiceAccount(config('firebase.credentials'))
            ->createDatabase();
    }

    public function addUser(array $userData): void
    {
        $this->database->getReference('users')->push($userData);
    }

    public function getUsers(): array
    {
        return $this->database->getReference('users')->getValue() ?? [];
    }
}
