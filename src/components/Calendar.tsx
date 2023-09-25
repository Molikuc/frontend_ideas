import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  const hours = Array.from({ length: 11 }, (_, index) => index + 1);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Calendar</div>
      <div className="flex h-[30rem] min-w-[50rem] shadow-xl rounded-lg p-5 gap-5">
        <div className="mx-5 text-2xl">
          <div className="my-5">Good evening!</div>
          <div className="flex my-5 text-xl">
            <div>September 2023</div>
            <div>
              <ChevronLeft />
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-5 text-center">
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
        <div className="h-[95%] w-[40%]">
          <div className="text-3xl">Chosen day</div>
          <div className="text-sm h-full overflow-scroll no-scrollbar flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-[25%]">12 AM</div>
              <div className="h-[5rem] w-full border-t-2"></div>
            </div>
            {hours.map((hour) => (
              <div key={hour} className="flex gap-2">
                <div className="w-[25%]">{hour} AM</div>
                <div className="h-[5rem] w-full border-t-2"></div>
              </div>
            ))}
            <div className="flex gap-2">
              <div className="w-[25%]">12 PM</div>
              <div className="h-[5rem] w-full border-t-2"></div>
            </div>
            {hours.map((hour) => (
              <div key={hour} className="flex gap-2">
                <div className="w-[25%]">{hour} PM</div>
                <div className="h-[5rem] w-full border-t-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
