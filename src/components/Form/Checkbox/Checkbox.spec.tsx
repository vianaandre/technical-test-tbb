import { theme } from 'common/styles/theme';
import { renderWithTheme } from 'common/test/renderWithTest'; 
import { Checkbox } from './Checkbox';

const checkbox = <Checkbox id='test' label='test' name='test' value='test' />;

describe('Checkbox Component', () => {
	it('should render on screen', () => {
		const { getByText } = renderWithTheme(checkbox, theme); 

		expect(getByText('test')).toBeInTheDocument();
	});
	it('must contain the value with the value test', () => {
		const { getByDisplayValue } = renderWithTheme(checkbox, theme); 

		expect(getByDisplayValue('test')).toHaveAttribute('value', 'test');
	});
	it('must contain the value with the name test', () => {
		const { getByDisplayValue } = renderWithTheme(checkbox, theme); 

		expect(getByDisplayValue('test')).toHaveAttribute('name', 'test');
	});
});