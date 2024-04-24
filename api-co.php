<?php

header('Access-Control-Allow-Origin: *'); // Autorise les requêtes provenant de domaines différents
header('Content-Type: application/json');

class AnimalData {
    private $servername;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    public function __construct() {
        $this->servername = "89.116.147.204";
        $this->username = "u150008834_black";
        $this->password = "KoHcwl4~R";
        $this->dbname = "u150008834_black";

        // Connexion à la base de données
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        // Vérifier la connexion
        if ($this->conn->connect_error) {
            die("Connexion échouée: " . $this->conn->connect_error);
        }
    }

    public function getAnimalData() {
        // Récupérer les données de la table "fiche-animal"
        $sql = "SELECT * FROM `fiche_animal`";
        $result = $this->conn->query($sql);

        // Convertir les données en tableau associatif
        $data = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        // Fermer la connexion à la base de données
        $this->conn->close();

        // Convertir le tableau en JSON et le retourner
        return json_encode($data);
    }
}

$animalData = new AnimalData();
echo $animalData->getAnimalData();

?>
