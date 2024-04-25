import { Typography, Card, CardHeader, CardBody, Chip, Button, ButtonGroup, IconButton, CardFooter } from "@material-tailwind/react";
import { Carrot, Check, Radiation, TriangleAlert, X } from 'lucide-react'

const TABLE_HEAD = ["Nome", "Sexo", "Alguma coisa", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "H",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "H",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "M",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "H",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "H",
    date: "04/10/21",
  },
];

export default function App() {
  return (
    <>
      <main className="w-screen min-h-screen bg-[#eee] px-40 py-12">
        <section className="w-full h-full">
          <Card placeholder={''}>
            <CardHeader placeholder={''}
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography placeholder={''} variant="h3" color="white">
                Festa Tal
              </Typography>
              <Typography placeholder={''} variant="paragraph" color="white">
                Colocamos dados aqui como: local da festa, nome da festa, hora de inicio e fim, data, etc.
              </Typography>
            </CardHeader>
            <CardBody placeholder={''}>
              <table className="w-full min-w-max table-auto text-left rounded-md border border-[#c4c4c4] overflow-hidden">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography placeholder={''}
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ name, job, date }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography placeholder={''} variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography placeholder={''} variant="small" color="blue-gray" className="font-normal">
                          <Chip
                            className={`w-[2rem] h-[2rem] flex items-center justify-center ${job === 'H' ? 'bg-blue-500' : 'bg-pink-400'}`}
                            value={
                              job === 'H' ? <Carrot size={20} /> : <Radiation size={20} />
                            } />
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography placeholder={''} variant="small" color="blue-gray" className="font-normal">
                          {date}
                        </Typography>
                      </td>
                      <td className="p-4 flex items-end justify-end">
                        <span className="w-fit gap-2 flex">
                          <IconButton placeholder={''} className="" size="sm" color="green">
                            <Check size={20} />
                          </IconButton>
                          <IconButton placeholder={''} size="sm" color="orange">
                            <TriangleAlert size={20} />
                          </IconButton>
                          <IconButton placeholder={''} size="sm" color="red">
                            <X size={20} />
                          </IconButton>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
            <CardFooter placeholder={''} className="flex items-end justify-end">
              <Button placeholder={''} color="blue">Encerrar entradas</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
