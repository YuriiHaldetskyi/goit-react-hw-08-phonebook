import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filterQuery = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <div>
      <label>
        <FilterInput
          type="text"
          placeholder="Find contact"
          value={filterQuery}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};
