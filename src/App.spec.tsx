import { App } from 'App';
import { renderWithTheme } from 'common/test/renderWithTest';
import { theme } from 'common/styles/theme';

test('sum', () => {
	const { getByText } = renderWithTheme(<App />, theme);

	expect(getByText('O que você')).toBeInTheDocument();
});