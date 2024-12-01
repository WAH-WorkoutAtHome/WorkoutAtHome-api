const workoutPlans = {
  weight_loss: [
    {
      day: 1,
      title: "Upper Body & Cardio",
      activities: [
        "Push-Ups (20 repetisi, 3 set): Latihan untuk menguatkan otot dada, bahu, dan trisep.",
        "Jumping Jacks (3 menit, 3 set): Latihan kardio untuk membakar kalori dan meningkatkan detak jantung.",
      ],
    },
    {
      day: 2,
      title: "Lower Body",
      activities: [
        "Bodyweight Squats (15 repetisi, 3 set): Latihan untuk menguatkan otot paha, bokong, dan otot bawah tubuh.",
        "Lunges (15 repetisi per kaki, 3 set): Latihan untuk menguatkan paha depan dan bokong.",
      ],
    },
    {
      day: 3,
      title: "HIIT Training",
      activities: [
        "Mountain Climbers (30 detik, 3 set): Latihan kardio untuk membakar lemak dengan gerakan cepat.",
        "Burpees (12 repetisi, 3 set): Latihan penuh tubuh untuk meningkatkan kekuatan dan daya tahan.",
      ],
    },
    {
      day: 4,
      title: "Stretch & Cardio",
      activities: [
        "Yoga Session (20 menit): Latihan fleksibilitas untuk relaksasi dan perbaikan postur tubuh.",
        "Jogging (15 menit): Latihan kardio untuk meningkatkan stamina dan membakar kalori.",
      ],
    },
    {
      day: 5,
      title: "Rest Day",
      activities: [
        "Light Walking (20 menit): Berjalan santai untuk pemulihan tubuh dan memperbaiki sirkulasi darah.",
        "Full Body Stretch (10 menit): Peregangan seluruh tubuh untuk meningkatkan kelenturan.",
      ],
    },
    {
      day: 6,
      title: "Core & Cardio",
      activities: [
        "Plank Variations (1 menit setiap variasi, 3 set): Latihan inti untuk memperkuat otot perut dan punggung bawah.",
        "Jump Rope (2 menit, 4 set): Latihan kardio untuk meningkatkan kebugaran dan koordinasi.",
      ],
    },
    {
      day: 7,
      title: "Full Body Burn",
      activities: [
        "Squats (20 repetisi, 3 set): Latihan untuk paha dan bokong.",
        "Push-Ups (15 repetisi, 3 set): Latihan untuk dada dan bahu.",
        "Burpees (10 repetisi, 3 set): Latihan penuh tubuh untuk pembakaran kalori maksimal.",
      ],
    },
  ],

  weight_gain: [
    {
      day: 1,
      title: "Upper Body Strength",
      activities: [
        "Push-Ups (12 repetisi, 3 set): Latihan dasar untuk kekuatan otot dada.",
        "Pike Push-Ups (10 repetisi, 3 set): Variasi push-up untuk melatih otot bahu.",
      ],
    },
    {
      day: 2,
      title: "Lower Body Strength",
      activities: [
        "Lunges (10 repetisi per kaki, 3 set): Latihan penguatan paha dan bokong.",
        "Glute Bridges (15 repetisi, 3 set): Latihan untuk menguatkan bokong dan otot punggung bawah.",
      ],
    },
    {
      day: 3,
      title: "Core Activation",
      activities: [
        "Plank (1 menit, 3 set): Latihan untuk memperkuat otot inti dan stabilitas tubuh.",
        "Sit-Ups (15 repetisi, 3 set): Latihan perut untuk memperkuat otot perut bagian atas.",
      ],
    },
    {
      day: 4,
      title: "Active Recovery",
      activities: [
        "Yoga Flow (15 menit): Latihan pemulihan dengan pernapasan dalam dan peregangan tubuh.",
        "Walking (20 menit): Aktivitas ringan untuk meningkatkan sirkulasi darah dan pemulihan tubuh.",
      ],
    },
    {
      day: 5,
      title: "Full Body Circuit",
      activities: [
        "Bodyweight Squats (15 repetisi, 3 set): Latihan untuk penguatan tubuh bagian bawah.",
        "Push-Ups (10 repetisi, 3 set): Latihan dada dan trisep.",
      ],
    },
    {
      day: 6,
      title: "Cardio Light",
      activities: [
        "Jogging (15 menit): Latihan kardio ringan untuk membakar lemak tanpa tekanan berlebih.",
        "Stretching (10 menit): Peregangan untuk meningkatkan fleksibilitas tubuh.",
      ],
    },
    {
      day: 7,
      title: "Rest Day",
      activities: [
        "Meditation (10 menit): Latihan pernapasan untuk meredakan stres dan meningkatkan fokus.",
        "Full Body Stretch (20 menit): Peregangan untuk seluruh tubuh untuk membantu pemulihan otot.",
      ],
    },
  ],

  muscle_building: [
    {
      day: 1,
      title: "Upper Body Build",
      activities: [
        "Push-Ups (12 repetisi, 4 set): Latihan untuk kekuatan dada dan lengan.",
        "Plank Shoulder Taps (15 repetisi, 3 set): Latihan untuk stabilitas bahu dan otot inti.",
      ],
    },
    {
      day: 2,
      title: "Lower Body Build",
      activities: [
        "Bulgarian Split Squats (12 repetisi per kaki, 3 set): Latihan untuk penguatan paha dan bokong.",
        "Calf Raises (20 repetisi, 3 set): Latihan untuk memperkuat betis.",
      ],
    },
    {
      day: 3,
      title: "Core Strength",
      activities: [
        "Russian Twists (20 repetisi, 3 set): Latihan untuk memperkuat otot perut bagian samping.",
        "Leg Raises (15 repetisi, 3 set): Latihan untuk menguatkan otot perut bagian bawah.",
      ],
    },
    {
      day: 4,
      title: "Cardio Recovery",
      activities: [
        "Jogging (20 menit): Latihan kardio ringan untuk pemulihan.",
        "Dynamic Stretching (10 menit): Peregangan dinamis untuk meningkatkan fleksibilitas.",
      ],
    },
    {
      day: 5,
      title: "Full Body Strength",
      activities: [
        "Bodyweight Squats (15 repetisi, 3 set): Latihan untuk paha dan bokong.",
        "Push-Ups (12 repetisi, 3 set): Latihan dada dan trisep.",
      ],
    },
    {
      day: 6,
      title: "Active Recovery",
      activities: [
        "Yoga Flow (20 menit): Latihan pernapasan dan peregangan untuk pemulihan otot.",
        "Walking (20 menit): Berjalan kaki untuk meningkatkan sirkulasi darah.",
      ],
    },
    {
      day: 7,
      title: "Full Body Blast",
      activities: [
        "Jump Squats (10 repetisi, 3 set): Latihan untuk kekuatan kaki dan bokong.",
        "Burpees (8 repetisi, 3 set): Latihan penuh tubuh untuk pembakaran kalori maksimal.",
        "Side Plank (30 detik per sisi, 3 set): Latihan untuk kekuatan inti dan stabilitas tubuh.",
      ],
    },
  ],

  maintenance: [
    {
      day: 1,
      title: "Cardio & Light Strength",
      activities: [
        "Jogging in Place (20 menit): Latihan kardio ringan untuk membakar kalori.",
        "Bodyweight Squats (15 repetisi, 3 set): Latihan untuk otot paha dan bokong.",
      ],
    },
    {
      day: 2,
      title: "Upper Body & Core",
      activities: [
        "Push-Ups (10 repetisi, 3 set): Latihan untuk dada, bahu, dan trisep.",
        "Plank (30 detik, 3 set): Latihan inti untuk kekuatan perut dan punggung.",
      ],
    },
    {
      day: 3,
      title: "Flexibility",
      activities: [
        "Yoga Session (20 menit): Latihan untuk kelenturan dan relaksasi.",
        "Dynamic Stretching (10 menit): Peregangan dinamis untuk meningkatkan mobilitas.",
      ],
    },
    {
      day: 4,
      title: "Active Recovery",
      activities: [
        "Walking (20 menit): Berjalan kaki untuk pemulihan ringan.",
        "Meditation (10 menit): Latihan pernapasan untuk meredakan stres.",
      ],
    },
    {
      day: 5,
      title: "Full Body Circuit",
      activities: [
        "Squats (15 repetisi, 3 set): Latihan tubuh bagian bawah.",
        "Push-Ups (12 repetisi, 3 set): Latihan dada dan trisep.",
        "Plank (30 detik, 3 set): Latihan untuk kekuatan inti.",
      ],
    },
    {
      day: 6,
      title: "Cardio Light",
      activities: [
        "Jogging (15 menit): Latihan ringan untuk pemulihan.",
        "Stretching (10 menit): Peregangan untuk pemulihan otot.",
      ],
    },
    {
      day: 7,
      title: "Rest Day",
      activities: [
        "Full Body Stretch (20 menit): Peregangan untuk seluruh tubuh untuk pemulihan otot.",
        "Meditation (10 menit): Latihan pernapasan untuk relaksasi dan pemulihan mental.",
      ],
    },
  ],
};

module.exports = workoutPlans;
