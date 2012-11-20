jquery.fillForm
===============

This jQuery plugin helps you fill form fields, with key-value object, containing input name as key, and value as value.

Example:

####HTML
~~~html
<form id="form">
    <input name="title" />
    <input name="description" />
</form>
~~~
####Javascript
~~~js
$('#form').fillForm({
    title: 'Your title',
    description: 'Your description'
});
~~~