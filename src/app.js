export default async function app() {
	return `<h1>hello world</h1>`;
}

console.log(`The variable "app" is of type ${typeof app}`);
app.test=1234;