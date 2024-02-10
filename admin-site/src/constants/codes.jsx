const workshopCodes = {
    // workshops
    GENERATIVEAI: { name: 'Generative AI Workshop', team: 1, cost: 799 },
    ETHICALHACKING: { name: 'Cyber Security In The Age of AI Workshop', team: 1, cost: 999 },
    IOTUNLEASED: { name: 'IOT Unleased Workshop', team: 1, cost: 599 },
    BIMUSINGREVIT: { name: 'BIM using Revit Workshop', team: 1, cost: 349 },
    BRAINWAVEROBO: { name: 'Brainwave Controlled Robotics Workshop', team: 1, cost: 1199 },
    '3DANIMATION': { name: '3D Animation Workshop' },
    FULLSTACKDEV: { name: 'Full Stack Development Workshop', team: 1, cost: 499 },
    DATASCIENCE: { name: 'Data Science with Python Workshop', team: 1, cost: 499 },
    SIXTHSENSEROBO: { name: 'Sixth Sense Robotics Workshop', team: 1, cost: 1199 },
    DESIGNTHINKING: { name: 'Design Thinking For Space Colonization Workshop', team: 1, cost: 299 }

};

const eventCodes = {
    // events
    GENERALREGISTRATION: { name: 'General Registration', team: 1, cost: 299 },
    CIVILX: { name: 'Civil X', type: 'Iconic', team: 3, cost: 149 },
    BYTEBASH: { name: 'Byte Bash', type: 'Iconic', team: 3, cost: 149 },
    OSPC: { name: 'OSPC', type: 'Iconic', team: 2, cost: 199 },
    PACBOT: { name: 'PacBot', type: 'Iconic', team: 4, cost: 499 },
    ROWBOATICS: { name: 'Rowboatics', type: 'Iconic', team: 3, cost: 499 },
    ROBORUSH: { name: 'RoboRush', type: 'Iconic', team: 4, cost: 499 },
    PAPERPRESENTATION: { name: 'Paper Presentation', type: 'Iconic', team: 3, cost: 199 },
    ENGINEERINGQUIZ: { name: 'Engineering Quiz', type: 'Iconic', team: 3, cost: 199 },
    GODSPEED: { name: 'Godspeed', type: 'Flagship', team: 4, cost: 999 },
    ROBOWARSFIFTEEN: { name: 'Robo Wars (15 KG)', type: 'Flagship', team: 5, cost: 999 },
    ROBOWARSEIGHT: { name: 'Robo Wars (8 KG)', type: 'Flagship', team: 5, cost: 999 },
    SKYSCULPTURE: { name: 'Sky Sculpture', type: 'Flagship', team: 6, cost: 999 },
    DRONERACING: { name: 'Drone Racing', type: 'Flagship', team: 6, cost: 999 },
    SHERLOCK: { name: 'Sherlockk & Wattson', type: 'Online', team: 1, cost: 0 },
    RIDDLESPHINX: { name: 'Riddle of Sphinx', type: 'Online', team: 1, cost: 0 },
 };

 const sampleEventsData = [
    {
      event: "Robo wars",
      team: "binary potatoes",
      cost: 999,
      college: "IIT Bombay",
      paymentStatus: "Paid",
      date: "2021-09-12",
    },
    {
      event: "Code fest",
      team: "hexagonal donuts",
      cost: 799,
      college: "IIT Delhi",
      paymentStatus: "Unpaid",
      date: "2021-10-15",
    },
    {
      event: "Hackathon",
      team: "quantum bits",
      cost: 1299,
      college: "IIT Madras",
      paymentStatus: "Paid",
      date: "2021-11-20",
    },
    {
      event: "Hackathon",
      team: "Shoot the kuruvi",
      cost: 1299,
      college: "CEG",
      paymentStatus: "Paid",
      date: "2021-11-20",
    },
    {
      event: "AI challenge",
      team: "neural networks",
      cost: 1499,
      college: "IIT Kanpur",
      paymentStatus: "Unpaid",
      date: "2021-12-05",
    },
    {
      event: "AI challenge",
      team: "Cegians",
      cost: 1499,
      college: "CEG",
      paymentStatus: "Unpaid",
      date: "2023-12-05",
    },
    {
      event: "Dance competition",
      team: "twisters",
      cost: 199,
      college: "CEG",
      paymentStatus: "paid",
      date: "2021-12-08",
    },
    {
      event: "AI challenge",
      team: "neural networks",
      cost: 1499,
      college: "CEG",
      paymentStatus: "Unpaid",
      date: "2021-12-05",
    },
  ]

  const URL = "http://localhost:8000"

 
 export {workshopCodes, eventCodes, sampleEventsData, URL};

