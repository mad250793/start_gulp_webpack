importScripts('build/workbox-v4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    '/',
    // 'build/main.min.css',
    // 'build/app.min.js',
    '/offline',
]);


workbox.googleAnalytics.initialize();



function showNotification() {
    self.registration.showNotification('Заголовок уведомления', {
        lang: 'ru',
        body: 'текст уведомления',
        // icon: 'путь к иконке уведомления',
        // badge: '/img/favicon/favicon.ico',
        vibrate: [500, 100, 500],
    });
}



self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});


if (self.Notification.permission == 'granted') {

    setTimeout(() => {
        showNotification();
    }, 5000);

}