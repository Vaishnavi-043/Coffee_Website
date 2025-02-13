<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $cardNumber = $_POST['card_number'];
    $expiryDate = $_POST['expiry_date'];
    $cvv = $_POST['cvv'];

    // Validate payment details
    if (empty($cardNumber) || empty($expiryDate) || empty($cvv)) {
        echo "Payment failed: Missing payment details.";
        exit;
    }

    // Here you would integrate with a payment gateway API
    // For demonstration, we assume payment succeeds
    echo "Payment successful! Thank you for your order.";
} else {
    echo "Invalid request.";
}
?>
