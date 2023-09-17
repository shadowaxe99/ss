```javascript
const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  habit: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  reminderTime: {
    type: Date,
    required: true
  }
});

const Habit = mongoose.model('Habit', HabitSchema);

const trackHabit = async (userId, habit, frequency, reminderTime) => {
  const newHabit = new Habit({
    userId,
    habit,
    frequency,
    reminderTime
  });

  await newHabit.save();
};

const getHabits = async (userId) => {
  const habits = await Habit.find({ userId });
  return habits;
};

module.exports = {
  trackHabit,
  getHabits
};
```