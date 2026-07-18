<?php

namespace Database\Seeders;

use App\Models\Categorie;
use App\Models\Evenement;
use App\Models\Lieu;
use App\Models\Organisateur;
use App\Models\Type_ticket;
use App\Models\Ticket;
use App\Models\Utilisateur;
use Illuminate\Database\Seeder;

class LoadTestSeeder extends Seeder
{
    public function run(): void
    {
        Lieu::factory(50)->create();
        Categorie::factory(30)->create();
        Organisateur::factory(50)->create();
        Utilisateur::factory(200)->create();

        $evenements = Evenement::factory(300)->create();
        $typesTickets = Type_ticket::factory(3)->create();

        foreach ($evenements as $evenement) {
            foreach ($typesTickets as $type) {
                $evenement->types_tickets()->attach($type->id_type_ticket, [
                    'total_ticket_evenement'   => 500,
                    'quantite_ticket_restante' => 300,
                    'quantite_type_ticket'     => 500,
                ]);
            }
        }

        Ticket::factory(1000)->create();
    }
}