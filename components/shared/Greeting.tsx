function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 15) return "Good Afternoon";
  if (hour < 18) return "Good Evening";
  return "Good Night";
}

export default function Greeting() {
  return <div className="text-4xl">{getGreeting()}! User,</div>;
}
