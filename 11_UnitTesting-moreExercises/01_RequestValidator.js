validateRequest({
    method: 'GET ',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

function validateRequest(input_object) {
    let method_regex = /^(GET|POST|DELETE|CONNECT)$/;
    let url_regex = /^(\*|[0-9A-Za-z\.]+)$/;
    let version_regex = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/;
    let message_regex = /^([^<>\\&'"]+|^(?![\s\S]))$/;

    let method = input_object['method'];
    let url = input_object['uri'];
    let version = input_object['version'];
    let message = input_object['message'];

    validator(method_regex, method, 'Method');
    validator(url_regex, url, 'URI');
    validator(version_regex, version, 'Version');
    validator(message_regex, message, 'Message');

    return input_object;

    function validator(regex, element, elementName) {
        let isValid = true;

        if (!regex.test(element) || element == undefined) {
            isValid = false
        }

        if (!isValid) {
            throw new Error(`Invalid request header: Invalid ${elementName}`);
        }
    }
}