const express = require('express');
const app = express();

// Define your API endpoints here

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
app.get('/api/appointment-types', async (req, res) => {
  const appointmentTypes = [
    'Dentist',
    'Gynecologist/Obstetrician',
    'Dietitian/Nutrition'
  ];

  res.json(appointmentTypes);
});

app.get('/api/doctors/:appointmentType', async (req, res) => {
  const appointmentType = req.params.appointmentType;

  const doctors = [
    {
      name: 'Dr. Ujjval Mehrotra',
      specialty: 'Dentist',
      experience: '10',
      address: "Dalanwala,Dehradun",
      clinic: "Face Mile Dentofacial Clinic",
      fee: "200",
      like: "100",
      comments: "17"
    },
    {
      name: 'Dr. Mehak Aggarwal',
      specialty: 'Dentist',
      experience: '15',
      address: "Cannaught Place, Dehradun",
      clinic: "Mahak's Dental Clinic",
      fee: "300",
      like: "96",
      comments: "54"
    },
    {
      name: "Dr. Neha Kapoor",
      specialty: "Gynecologist/Obstetrician",
      experience: "10 years",
      address: "Gurgaon, Haryana",
      clinic: "Neha Kapoor Neurology Clinic",
      fee: "400",
      likes: "75",
      comments: "15"
    },
    {
      name: "Dr. Ankit Kumar",
      specialty: "Gynecologist/Obstetrician",
      experience: "5 years",
      address: "Noida, Uttar Pradesh",
      clinic: "Ankit Kumar Psychiatric Clinic",
      fee: "350",
      likes: "60",
      comments: "10"
    },
    {
      name: "Dr. Sanjana Singh",
      specialty: "Gynecologist/Obstetrician",
      experience: "12 years",
      address: "Chandigarh, Punjab",
      clinic: "Sanjana Singh Pediatric Clinic",
      fee: "300",
      likes: "85",
      comments: "20"
    },
    {
      name: "Dr. Tanmay Sinha",
      specialty: "Dentist",
      experience: "15 years",
      address: "Jaipur, Rajasthan",
      clinic: "Tanmay Sinha General Surgery Clinic",
      fee: "550",
      likes: "90",
      comments: "25"
    },
    {
      name: "Dr. Shreya Sharma",
      specialty: "Dietitian/Nutrition",
      experience: "10 years",
      address: "Lucknow, Uttar Pradesh",
      clinic: "Shreya Sharma Gastroenterology Clinic",
      fee: "450",
      likes: "70",
      comments: "15"
    },
    {
      name: "Dr. Dev Arora",
      specialty: "Dietitian/Nutrition",
      experience: "12 years",
      address: "Mumbai, Maharashtra",
      clinic: "Dev Arora Endocrinology Clinic",
      fee: "500",
      likes: "80",
      comments: "20"
    },
    {
      name: "Dr. Aditi Gupta",
      specialty: "Dietitian/Nutrition",
      experience: "5 years",
      address: "Bangalore, Karnataka",
      clinic: "Aditi Gupta Dermatology Clinic",
      fee: "350",
      likes: "65",
      comments: "10"
    },
    {
      name: "Dr. Rahul Kapoor",
      specialty: "Dietitian/Nutrition",
      experience: "15 years",
      address: "Hyderabad, Telangana",
      clinic: "Rahul Kapoor Urology Clinic",
      fee:"600",
      likes: "95",
      comments: "25"
    }
  ]
    ;

    if (appointmentType === 'Dentist') {
      res.json(doctors);
    } else {
      res.sendStatus(404);
    }
  });
  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });