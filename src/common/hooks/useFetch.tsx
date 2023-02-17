import useSWR from 'swr';
import api from 'services/api';

export function useFetch<Data = unknown>(path: string) {
	const url = `${process.env.VITE_URL_API}${path}`;

	const { data, error } = useSWR<Data, Error>(`${url}`, async () => {
		const { data } = await api.get(path) as { data: Data };
		return data;
	}, {
		errorRetryCount: 0,
		shouldRetryOnError: true,
		errorRetryInterval: 300,
	});

	return { data, error };
}
