import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Calendar</div>
      <div>
        <div>Good evening!</div>
        <div className="flex">
          <div>September 2023</div>
          <div>
            <ChevronLeft />
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="text-purple-300">Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div className="text-purple-300">Sat</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
      </div>
      <div>
        <div>Chosen day</div>
      </div>
    </div>
  );
};

export default Calendar;
