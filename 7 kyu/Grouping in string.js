/* 
In this kata you have to find whether same elements of the string are grouped together.

Example

Input	Output
112233	true
11223311	false
*/

const isConsecutive = str => {
	const filter = [...str].filter((e,i) => e !== str[i-1]).join('')
	const set = [...new Set(str)].join('')
	
	return filter === set
}