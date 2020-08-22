const express = require("express");
const stripe = require("stripe")("sk_test_51H3QTXHzmFQ3IEpH6Rx6NKRr6RH6qBW5LiqW4UCVnYT6eDjcpEfH8i4CLlIWSVPZR2ax0YDyouhnqdyQ9yaO9Vt700G8fEHPhW");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

router.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

router.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price* 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotencyKey
      }
    );
    console.log("Charge:", { charge });
    status = "success";
    
    var transporter = nodemailer.createTransport("SMTP",{
      service: 'Gmail',
      auth: {
        user: 'Weprojectnodemailer@gmail.com',
        pass: 'Palkia786'
      }
    });

    var mailOptions = {
      from: 'syednuhhashmi786@gmail.com',
      to: token.email,
      subject: `Payment Success payment id ${token.id}`,
      text: `Order has been placed of payment id ${token.id} of ${product.name} and will be deilvered at ${charge.address} shortly in 3 days `
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

module.exports = router;
