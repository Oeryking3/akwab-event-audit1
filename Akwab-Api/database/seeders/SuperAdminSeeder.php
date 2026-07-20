<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Utilisateur;
use Illuminate\Support\Str;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::where('libelle', 'Administrateur')->first();

        $password = env('SUPERADMIN_PASSWORD');
        if (empty($password)) {
            $password = Str::random(16);
            $this->command->warn("SUPERADMIN_PASSWORD non defini. Mot de passe genere : {$password}");
        }

        Utilisateur::firstOrCreate(
            ['email' => 'admin@akwab.com'],
            [
                'nom'          => 'Admin',
                'prenoms'      => 'Super',
                'telephone'    => '00000000',
                'mot_de_passe' => bcrypt($password),
                'id_role'      => $role->id_role,
            ]
        );
    }
}