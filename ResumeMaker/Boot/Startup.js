define(['jquery', 'knockout'], function ($, ko) {


    setTimeout(function () {

        ko.components.register('Login', { require: 'Components/Login/Login' });
        ko.components.register('Registration', { require: 'Components/Registration/Registration' });

        //main components
        ko.components.register('Main', { require: 'Components/Main/Main' });
        ko.components.register('Canvas', { require: 'Components/Canvas/Canvas' });
        ko.components.register('Controls', { require: 'Components/Controls/Controls' });
        ko.components.register('Header', { require: 'Components/Header/Header' });
        ko.components.register('Footer', { require: 'Components/Footer/Footer' });

        ko.components.register('Profile', { require: 'Components/Templates/Profile/Profile' });
        //Sub Controls
        ko.components.register('Introduction', { require: 'Components/Templates/Introduction/Introduction' });
        ko.components.register('Education', { require: 'Components/Templates/Education/Education' });
        ko.components.register('Experience', { require: 'Components/Templates/Experience/Experience' });
        ko.components.register('Hobbies', { require: 'Components/Templates/Hobbies/Hobbies' });
        ko.components.register('Languages', { require: 'Components/Templates/Languages/Languages' });
        ko.components.register('Skills', { require: 'Components/Templates/Skills/Skills' });



        ko.applyBindings();

    }, 0);

});