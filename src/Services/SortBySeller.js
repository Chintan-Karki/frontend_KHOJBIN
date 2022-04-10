import _ from 'lodash';
import { rankFinder } from './RankFind';

export const sortProductListBySeller = (filtered_data, sellerOrder) => {
	return _.sortBy([...filtered_data], function (element) {
		var rank = {
			Daraz: rankFinder(sellerOrder, "Daraz"),
			Sastodeal: rankFinder(sellerOrder, "Sastodeal"),
			Ryzen: rankFinder(sellerOrder, "Ryzen"),
			Gyapu: rankFinder(sellerOrder, "Gyapu"),
			Hamrobazaar: rankFinder(sellerOrder, "Hamrobazaar"),
		};
		return rank[element.sellerName];
	});
};
