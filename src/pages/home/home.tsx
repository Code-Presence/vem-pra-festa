import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { UserRound } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatEventName } from "../../utils/formatEventName";

interface Event {
  name: string;
  organizer: string;
  place: string;
  maxGuests: string;
  confirmedGuests: string;
}

function Home(): JSX.Element {
  const [events, setEvents] = React.useState<Event[]>([]);

  const navigate = useNavigate();

  const handleClick = () => {
    const existingEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const newEvent = {
      name: `Evento ${existingEvents.length + 1}`,
      organizer: `Agência de festas ${existingEvents.length + 1} LTDA`,
      place: "rua tal, número tal, bairro tal",
      maxGuests: "200",
      confirmedGuests: "50",
    };
    const updatedEvents = [...existingEvents, newEvent];
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  React.useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  return (
    <>
      <Card className="min-h-[20rem] p-4">
        <div className="w-full flex mb-4 items-end justify-end">
          <Button color={"green"} onClick={handleClick}>
            Criar evento
          </Button>
        </div>
        <CardBody className="grid grid-cols-3 gap-2 p-0">
          {events.map((event, index) => (
            <div
              key={index}
              className="shadow-sm p-2 rounded-md border border-[#c4c4c4]/10"
            >
              <span>
                <Typography variant="h5">{event.name}</Typography>
              </span>
              <span>
                <Typography variant="small" className="-mb-1">
                  organizado por:
                </Typography>
                <Typography>{event.organizer}</Typography>
              </span>
              <Chip
                className="w-fit"
                value={<>{event.maxGuests}</>}
                icon={<UserRound size={16} />}
                variant="outlined"
                size="sm"
              />
              <span className="w-full flex items-end justify-end shadow-none">
                <Button
                  size="sm"
                  color="blue"
                  onClick={() =>
                    navigate(`/event/list?${formatEventName(event.name)}`)
                  }
                >
                  acessar lista
                </Button>
              </span>
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  );
}

export { Home };
