const workoutPlans = {
  weight_loss: [
    {
      day: 1,
      title: "Upper Body & Cardio",
      activities: [
        {
          name: "Push-Ups",
          description: "Latihan untuk menguatkan otot dada, bahu, dan trisep.",
          repetitions: "20 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        },
        {
          name: "Jumping Jacks",
          description:
            "Latihan kardio untuk membakar kalori dan meningkatkan detak jantung.",
          duration: "3 menit, 3 set",
          videoUrl: "https://www.youtube.com/shorts/lWMw6uppiFc",
        },
      ],
    },
    {
      day: 2,
      title: "Lower Body",
      activities: [
        {
          name: "Bodyweight Squats",
          description:
            "Latihan untuk menguatkan otot paha, bokong, dan otot bawah tubuh.",
          repetitions: "15 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=m0GcZ24pK6k",
        },
        {
          name: "Lunges",
          description: "Latihan untuk menguatkan paha depan dan bokong.",
          repetitions: "15 repetisi per kaki, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=tTej-ax9XiA",
        },
      ],
    },
    {
      day: 3,
      title: "HIIT Training",
      activities: [
        {
          name: "Mountain Climbers",
          description:
            "Latihan kardio untuk membakar lemak dengan gerakan cepat.",
          duration: "30 detik, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=kLh-uczlPLg",
        },
        {
          name: "Burpees",
          description:
            "Latihan penuh tubuh untuk meningkatkan kekuatan dan daya tahan.",
          repetitions: "12 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=auBLPXO8Fww",
        },
      ],
    },
    {
      day: 4,
      title: "Stretch & Cardio",
      activities: [
        {
          name: "Yoga Session",
          description:
            "Latihan fleksibilitas untuk relaksasi dan perbaikan postur tubuh.",
          duration: "20 menit",
          videoUrl: "https://www.youtube.com/watch?v=FLFNI5PM2PM",
        },
        {
          name: "Jogging",
          description:
            "Latihan kardio untuk meningkatkan stamina dan membakar kalori.",
          duration: "15 menit",
          videoUrl: "https://www.youtube.com/shorts/cn3Ra2QiULc",
        },
      ],
    },
    {
      day: 5,
      title: "Rest Day",
      activities: [
        {
          name: "Light Walking",
          description:
            "Berjalan santai untuk pemulihan tubuh dan memperbaiki sirkulasi darah.",
          duration: "20 menit",
          videoUrl: "https://www.youtube.com/watch?v=2fOd_oMYkF0",
        },
        {
          name: "Full Body Stretch",
          description:
            "Peregangan seluruh tubuh untuk meningkatkan kelenturan.",
          duration: "12 menit",
          videoUrl: "https://www.youtube.com/watch?v=itJE4neqDJw",
        },
      ],
    },
    {
      day: 6,
      title: "Core & Cardio",
      activities: [
        {
          name: "Plank Variations",
          description:
            "Latihan inti untuk memperkuat otot perut dan punggung bawah.",
          duration: "1 menit setiap variasi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=k9w2LJAZ1iY",
        },
        {
          name: "Jump Rope",
          description:
            "Latihan kardio untuk meningkatkan kebugaran dan koordinasi.",
          duration: "2 menit, 4 set",
          videoUrl: "https://www.youtube.com/watch?v=kDOGb9C5kp0",
        },
      ],
    },
    {
      day: 7,
      title: "Full Body Burn",
      activities: [
        {
          name: "Squats",
          description: "Latihan untuk paha dan bokong.",
          repetitions: "20 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=zWXToSCaq-Q",
        },
        {
          name: "Push-Ups",
          description: "Latihan untuk menguatkan otot dada, bahu, dan trisep.",
          repetitions: "20 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        },
      ],
    },
  ],

  core_strength: [
    {
      day: 1,
      title: "Core Foundations",
      activities: [
        {
          name: "Plank",
          description:
            "Latihan dasar untuk mengaktifkan otot perut dan punggung bawah.",
          duration: "30 detik, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
        },
        {
          name: "Side Plank",
          description:
            "Latihan untuk melatih stabilitas dan otot samping perut.",
          duration: "30 detik per sisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=wqzrb67Dwf8",
        },
      ],
    },
    {
      day: 2,
      title: "Dynamic Core",
      activities: [
        {
          name: "Mountain Climbers",
          description:
            "Latihan dinamis untuk menguatkan otot perut dan kardio.",
          duration: "1 menit, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=nmwgirgXLYM",
        },
        {
          name: "Bicycle Crunches",
          description:
            "Latihan untuk melatih otot perut bagian bawah dan atas.",
          repetitions: "20 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=9FGilxCbdz8",
        },
      ],
    },
    {
      day: 3,
      title: "Core Strength & Balance",
      activities: [
        {
          name: "Bird Dog",
          description:
            "Latihan stabilitas untuk memperkuat otot inti dan koordinasi tubuh.",
          repetitions: "12 repetisi per sisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=wiFNA3sqjCA",
        },
        {
          name: "Dead Bug",
          description:
            "Latihan untuk melatih kontrol inti dan mencegah cedera punggung.",
          repetitions: "12 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=MCVX9wRd_h0",
        },
      ],
    },
    {
      day: 4,
      title: "Rest Day",
      activities: [
        {
          name: "Yoga Flow",
          description:
            "Peregangan lembut untuk meningkatkan fleksibilitas dan relaksasi.",
          duration: "20 menit",
          videoUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        },
        {
          name: "Light Walking",
          description: "Berjalan santai untuk pemulihan dan sirkulasi darah.",
          duration: "15 menit",
          videoUrl: "https://www.youtube.com/watch?v=2fOd_oMYkF0",
        },
      ],
    },
    {
      day: 5,
      title: "Core Burn",
      activities: [
        {
          name: "Russian Twists (tanpa beban)",
          description: "Latihan rotasi untuk melatih otot perut oblique.",
          repetitions: "20 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=wkD8rjkodUI",
        },
        {
          name: "Leg Raises",
          description: "Latihan untuk memperkuat otot perut bagian bawah.",
          repetitions: "15 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=JB2oyawG9KI",
        },
      ],
    },
    {
      day: 6,
      title: "Intense Core Challenge",
      activities: [
        {
          name: "Plank with Shoulder Taps",
          description:
            "Latihan intens untuk melatih keseimbangan dan stabilitas inti.",
          repetitions: "12 repetisi per sisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=gKA5LBy7WAI",
        },
        {
          name: "Reverse Crunches",
          description: "Latihan untuk memperkuat perut bagian bawah.",
          repetitions: "15 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=XY8KzdDcMFg",
        },
      ],
    },
    {
      day: 7,
      title: "Active Recovery",
      activities: [
        {
          name: "Foam Rolling (jika tersedia) atau Peregangan Lembut",
          description: "Relaksasi dan peregangan untuk pemulihan tubuh.",
          duration: "15 menit",
          videoUrl: "https://www.youtube.com/watch?v=X8P9KSaYOkE",
        },
        {
          name: "Full Body Stretch",
          description: "Peregangan seluruh tubuh untuk menjaga kelenturan.",
          duration: "20 menit",
          videoUrl: "https://www.youtube.com/watch?v=y87vSUoIMGU",
        },
      ],
    },
  ],

  muscle_building: [
    {
      day: 1,
      title: "Chest & Triceps",
      activities: [
        {
          name: "Push-Ups",
          description: "Latihan dasar untuk menguatkan otot dada dan trisep.",
          repetitions: "12-15 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        },
        {
          name: "Tricep Dips (using a chair)",
          description: "Latihan untuk melatih otot trisep.",
          repetitions: "12 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=0326dy_-CzM",
        },
      ],
    },
    {
      day: 2,
      title: "Back & Biceps",
      activities: [
        {
          name: "Superman Exercise",
          description: "Latihan untuk menguatkan otot punggung bawah.",
          duration: "30 detik tahan, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=z6PJMT2y8GQ",
        },
        {
          name: "Reverse Tabletop Pulls",
          description:
            "Latihan untuk melatih punggung atas dan otot biceps menggunakan berat tubuh.",
          repetitions: "8-10 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=yzvpOWmqpdg",
        },
      ],
    },
    {
      day: 3,
      title: "Legs & Shoulders",
      activities: [
        {
          name: "Bodyweight Squats",
          description: "Latihan untuk menguatkan otot paha, bokong, dan betis.",
          repetitions: "12-15 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=aclHkVaku9U",
        },
        {
          name: "Pike Push-Ups",
          description:
            "Latihan untuk melatih otot bahu dan trisep menggunakan berat tubuh.",
          repetitions: "10-12 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=XckEEwa1BPI",
        },
      ],
    },
    {
      day: 4,
      title: "Rest Day",
      activities: [
        {
          name: "Yoga Flow",
          description: "Peregangan untuk relaksasi dan pemulihan otot.",
          duration: "15-20 menit",
          videoUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        },
        {
          name: "Breathing Exercises",
          description:
            "Latihan pernapasan untuk meningkatkan fokus dan relaksasi.",
          duration: "10 menit",
          videoUrl: "https://www.youtube.com/watch?v=tybOi4hjZFQ",
        },
      ],
    },
    {
      day: 5,
      title: "Core & Cardio",
      activities: [
        {
          name: "Plank Variations",
          description:
            "Latihan inti untuk memperkuat otot perut dan stabilitas.",
          duration: "45 detik setiap variasi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=k9w2LJAZ1iY",
        },
        {
          name: "High Knees",
          description:
            "Latihan kardio intens untuk meningkatkan kekuatan dan daya tahan.",
          duration: "1 menit, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=sTvekaq6vOU",
        },
      ],
    },
    {
      day: 6,
      title: "Full Body Burn",
      activities: [
        {
          name: "Burpees",
          description: "Latihan seluruh tubuh untuk kekuatan dan daya tahan.",
          repetitions: "8-10 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=TU8QYVW0gDU",
        },
        {
          name: "Wall Sit",
          description: "Latihan untuk melatih kekuatan otot paha dan bokong.",
          duration: "30-40 detik, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=SszDMOZvFuw",
        },
      ],
    },
    {
      day: 7,
      title: "Active Recovery",
      activities: [
        {
          name: "Light Walking or Stretching",
          description: "Pemulihan ringan untuk meningkatkan fleksibilitas.",
          duration: "15-20 menit",
          videoUrl: "https://www.youtube.com/watch?v=vVxpEvcEYNM",
        },
        {
          name: "Foam Rolling (optional)",
          description: "Relaksasi otot untuk mencegah kekakuan.",
          duration: "10-15 menit",
          videoUrl: "https://www.youtube.com/watch?v=KWGsSq0J1Bk",
        },
      ],
    },
  ],

  maintenance: [
    {
      day: 1,
      title: "Upper Body",
      activities: [
        {
          name: "Push-Ups",
          description: "Latihan untuk menguatkan otot dada, bahu, dan trisep.",
          repetitions: "15 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        },
        {
          name: "Wall Push-Ups",
          description: "Alternatif push-up untuk intensitas ringan.",
          repetitions: "12 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=5NPvv40gd3Q",
        },
      ],
    },
    {
      day: 2,
      title: "Lower Body",
      activities: [
        {
          name: "Bodyweight Squats",
          description: "Latihan untuk menguatkan otot paha dan bokong.",
          repetitions: "12 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=m0GcZ24pK6k",
        },
        {
          name: "Step-Ups",
          description: "Latihan ringan untuk menguatkan kaki dan keseimbangan.",
          repetitions: "12 repetisi per kaki, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=elhu-WC1qk4",
        },
      ],
    },
    {
      day: 3,
      title: "Core & Stability",
      activities: [
        {
          name: "Plank",
          description: "Latihan untuk memperkuat otot inti dan punggung bawah.",
          duration: "30 detik, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
        },
        {
          name: "Bird Dog",
          description: "Latihan stabilitas ringan untuk tubuh bagian inti.",
          repetitions: "12 repetisi per sisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=wiFNA3sqjCA",
        },
      ],
    },
    {
      day: 4,
      title: "Rest & Recovery",
      activities: [
        {
          name: "Light Yoga",
          description:
            "Sesi yoga ringan untuk meningkatkan fleksibilitas dan relaksasi.",
          duration: "10 menit",
          videoUrl: "https://www.youtube.com/watch?v=VaoV1PrYft4",
        },
        {
          name: "Foam Rolling",
          description:
            "Peregangan dan pelepasan otot untuk mengurangi ketegangan.",
          duration: "10 menit",
          videoUrl: "https://www.youtube.com/watch?v=X8P9KSaYOkE",
        },
      ],
    },
    {
      day: 5,
      title: "Full Body Light Workout",
      activities: [
        {
          name: "Chair Dips",
          description: "Latihan ringan untuk menguatkan otot trisep.",
          repetitions: "10 repetisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=0326dy_-CzM",
        },
        {
          name: "Side Lunges",
          description:
            "Latihan ringan untuk mengaktifkan otot kaki dan bokong.",
          repetitions: "10 repetisi per sisi, 3 set",
          videoUrl: "https://www.youtube.com/watch?v=zejTuBTEkfY",
        },
      ],
    },
    {
      day: 6,
      title: "Cardio & Recovery",
      activities: [
        {
          name: "Brisk Walking",
          description:
            "Berjalan cepat untuk meningkatkan sirkulasi dan kebugaran.",
          duration: "20 menit",
          videoUrl: "https://www.youtube.com/shorts/_Y_FTROkP-U",
        },
        {
          name: "Dynamic Stretches",
          description: "Peregangan aktif untuk kelenturan dan kesiapan tubuh.",
          duration: "20 menit",
          videoUrl: "https://www.youtube.com/watch?v=TUY857PPkjU",
        },
      ],
    },
    {
      day: 7,
      title: "Active Recovery",
      activities: [
        {
          name: "Light Stretching",
          description:
            "Peregangan ringan untuk memperbaiki mobilitas dan mengurangi ketegangan.",
          duration: "10 menit",
          videoUrl: "https://www.youtube.com/watch?v=lNPaDikuRhU",
        },
        {
          name: "Meditation",
          description: "Sesi meditasi untuk menenangkan pikiran dan tubuh.",
          duration: "10 menit",
          videoUrl: "https://www.youtube.com/watch?v=z0GtmPnqAd8",
        },
      ],
    },
  ],
};

module.exports = workoutPlans;
