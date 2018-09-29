( function ( $ ) {
	'use strict';

	var hocTransliteration = {
		id: 'hoc-transliteration',
		name: 'ho transliteration',
		description: 'Phonetic keyboard for Ho',
		date: '2018-09-29',
		author: 'Purty',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 3,
		patterns: [
			[ 'a', '𑣁' ],
			[ '𑣁i', '𑣆' ],
			[ '𑣁u', '𑣇' ],
			[ 'b', '𑣗' ],
			[ 'c', 'c' ],
			[ 'ch', '𑣏' ],
			[ 'd', '𑣑' ],
			[ '𑣑h', '𑣔' ],
			[ 'e', '𑣈' ],

			[ 'g', '𑣋' ],
			[ 'h', '𑣙' ],
			[ 'i', '𑣂' ],
			[ 'j', '𑣎' ],
			[ 'k', '𑣌' ],
			[ 'l', '𑣚' ],
			[ 'm', '𑣖' ],
			[ 'n', '𑣓' ],
			[ '𑣓g', '𑣊' ],
			[ '𑣓j', '𑣍' ],
			[ '𑣓n', '𑣐' ],
			[ 'o', '𑣉' ],
			[ 'p', '𑣘' ],
			[ 'q', '𑣄' ],
			[ 'r', '𑣜' ],
			[ '𑣜r', '𑣛' ],
			[ 's', '𑣞' ],
			[ 't', '𑣒' ],
			[ '𑣒h', '𑣕' ],
			[ 'u', '𑣃' ],
			[ 'v', '𑣀' ],
			[ 'w', '𑣟' ],
			[ 'x', '𑣝' ],
			[ 'y', '𑣅' ],

			[ 'A', '𑢡' ],
			[ '𑢡(i|I)', '𑢦' ],
			[ '𑢡(U|u)', '𑢧' ],
			[ 'B', '𑢷' ],
			[ 'C', 'C' ],
			[ 'C(H|h)', '𑢯' ],
			[ 'D', '𑢱' ],
			[ '𑢱(H|h)', '𑢴' ],
			[ 'E', '𑢨' ],

			[ 'G', '𑢫' ],
			[ 'H', '𑢹' ],
			[ 'I', '𑢢' ],
			[ 'J', '𑢮' ],
			[ 'K', '𑢬' ],
			[ 'L', '𑢺' ],
			[ 'M', '𑢶' ],
			[ 'N', '𑢳' ],
			[ '𑢳(G|g)', '𑢪' ],
			[ '𑢳(J|j)', '𑢭' ],
			[ '𑢳(N|n)', '𑢰' ],
			[ 'O', '𑢩' ],
			[ 'P', '𑢸' ],
			[ 'Q', '𑢤' ],
			[ 'R', '𑢼' ],
			[ '𑢼(R|r)', '𑢻' ],
			[ 'S', '𑢾' ],
			[ 'T', '𑢲' ],
			[ '𑢲(H|h)', '𑢵' ],
			[ 'U', '𑢣' ],
			[ 'V', '𑢠' ],
			[ 'W', '𑢿' ],
			[ 'X', '𑢽' ],
			[ 'Y', '𑢥' ],
			[ '@', '𑣿' ],
			
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],

			[ '0', '𑣠' ],
			[ '1', '𑣡' ],
			[ '2', '𑣢' ],
			[ '3', '𑣣' ],
			[ '4', '𑣤' ],
			[ '5', '𑣥' ],
			[ '6', '𑣦' ],
			[ '7', '𑣧' ],
			[ '8', '𑣨' ],
			[ '9', '𑣩' ]
		]
	};
	$.ime.register( satSarjomBaha );

}( jQuery ) );
