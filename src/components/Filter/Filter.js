import { Label } from './Filter.styled';

export const Filter = ({ onFilter }) => (
  <>
    <Label>
      <span>Find contacts by name</span>
      <input onChange={onFilter} type="text" name="filter" />
    </Label>
  </>
);
