import {
  FormControl,
  FormControlLabel,
  FormGroup,
  ListSubheader,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import eurocup from '../../assets/euro-cup.svg'
import worldcup from '../../assets/world-cup.png'
import premier from '../../assets/premier-league.svg'
import superleague from '../../assets/sula.png'

export function FilterForm({ fields, setFields }) {
  return (
    <div className="flex flex-col justify-center gap-4 shadow-lg shadow-cyan-900">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 gap-4">
          <FormGroup className="flex-1 bg-slate-700 rounded-md p-2 shadow-lg shadow-slate-900 hover:shadow-indigo-500/40">
            <p className="text-white text-lg font-medium">Euro Cup</p>
            <img className='w-20' src={eurocup} alt="Euro Cup" />
            <FormControlLabel
              control={
                <Switch
                  color="info"
                  checked={fields.liga === 'euro'}
                  onChange={() => setFields({ ...fields, liga: 'euro' })}
                />
              }
            />
          </FormGroup>

          <FormGroup className="flex-1 bg-slate-700 rounded-md p-2 shadow-lg shadow-slate-900 hover:shadow-indigo-500/40">
            <p className="text-white text-lg font-medium">Copa Do Mundo</p>
            <img className='w-20' src={worldcup} alt="Copa Do Mundo" />
            <FormControlLabel
              control={
                <Switch
                  color="info"
                  checked={fields.liga === 'copa'}
                  onChange={() => setFields({ ...fields, liga: 'copa' })}
                />
              }
            />
          </FormGroup>
        </div>

        <div className="flex flex-1 gap-4">
          <FormGroup className="flex-1 bg-slate-700 rounded-md p-2 shadow-lg shadow-slate-900 hover:shadow-indigo-500/40 ">
            <p className="text-white text-lg font-medium">Premier</p>
            <img className='w-20' src={premier} alt="Premier" />
            <FormControlLabel
              control={
                <Switch
                  color="info"
                  checked={fields.liga === 'premier'}
                  onChange={() => setFields({ ...fields, liga: 'premier' })}
                />
              }
            />
          </FormGroup>

          <FormGroup className="flex-1 bg-slate-700 rounded-md p-2 shadow-lg shadow-slate-900 hover:shadow-indigo-500/40">
            <p className="text-white text-lg font-medium">Super Liga</p>
            <img className='w-20' src={superleague} alt="Super Liga" />
            <FormControlLabel
              control={
                <Switch
                  color="info"
                  checked={fields.liga === 'super'}
                  onChange={() => setFields({ ...fields, liga: 'super' })}
                />
              }
            />
          </FormGroup>
        </div>
      </div>

      <div className="bg-dark-pn rounded-md p-2 text-center">
        <h3 className="text-white text-lg font-semibold">Filtros</h3>

        <div className="flex flex-col gap-4 md:flex-row">
          <FormControl size="small" className="items-start w-full md:w-1/5">
            <label id="partidas" className="text-white mb-1">
              Partidas
            </label>
            <Select
              labelId="partidas"
              id="partidas"
              name="partidas"
              className="bg-slate-600 w-full"
              sx={{ color: 'white' }}
              value={fields.partidas}
              onChange={e => setFields({ ...fields, partidas: e.target.value })}
            >
              <MenuItem value={3}>Últimas 3 Horas</MenuItem>
              <MenuItem value={6}>Últimas 6 Horas</MenuItem>
              <MenuItem value={9}>Últimas 9 Horas</MenuItem>
              <MenuItem value={12}>Últimas 12 Horas</MenuItem>
              <MenuItem value={24}>Últimas 24 Horas</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" className="items-start w-full md:w-1/5">
            <label id="mercados" className="text-white mb-1">
              Mercados
            </label>
            <Select
              labelId="mercados"
              id="mercados"
              name="mercados"
              className="bg-slate-600 w-full"
              sx={{ color: 'white' }}
              value={fields.mercados}
              onChange={e => setFields({ ...fields, mercados: e.target.value })}
            >
              <ListSubheader>Ambas Marcam</ListSubheader>
              <MenuItem value={'AMS'}>Ambas Marcam Sim</MenuItem>
              <MenuItem value={'AMN'}>Ambas Marcam Não</MenuItem>

              <ListSubheader>Empate</ListSubheader>
              <MenuItem value={'EHT'}>Empate HT</MenuItem>
              <MenuItem value={'EFT'}>Empate FT</MenuItem>

              <ListSubheader>Marca Gol</ListSubheader>
              <MenuItem value={'CM'}>Casa Marca</MenuItem>
              <MenuItem value={'FM'}>Fora Marca</MenuItem>

              <ListSubheader>Over</ListSubheader>
              <MenuItem value={'O05'}>Over 0,5</MenuItem>
              <MenuItem value={'O15'}>Over 1,5</MenuItem>
              <MenuItem value={'O25'}>Over 2,5</MenuItem>
              <MenuItem value={'O35'}>Over 3,5</MenuItem>

              <ListSubheader>Under</ListSubheader>
              <MenuItem value={'U05'}>Under 0,5</MenuItem>
              <MenuItem value={'U15'}>Under 1,5</MenuItem>
              <MenuItem value={'U25'}>Under 2,5</MenuItem>
              <MenuItem value={'U35'}>Under 3,5</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
