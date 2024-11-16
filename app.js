const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
        const greeting = computed(() => `Selamat ${timeGreeting.value} tutor, ini adalah tugas kedua saya`)
        const motivated = ref('')
        const timeGreeting = computed(() => {
            const hour = (new Date()).getHours()
            return hour > 5 && hour <= 11 ? 'Pagi' : hour > 11 && hour <= 15 ? 'Siang' : hour > 15 && hour <= 18 ? 'Sore' : 'Malam'
        })
        const motivations = ['Kalau mau menunggu sampai siap, kita akan menghabiskan sisa hidup kita hanya untuk menunggu. - Lemony Snicket.', 'Hiduplah seolah engkau mati besok. Belajarlah seolah engkau hidup selamanya. - Mahatma Gandhi.', 'Sebuah perjalanan ribuan mil dimulai dari langkah kecil.', 'Berjuang itu capek, namun kesuksesan butuh perjuangan.']
        motivated.value = motivations[Math.floor(Math.random() * motivations.length)]
        setInterval(() => {
            motivated.value = motivations[Math.floor(Math.random() * motivations.length)]
        }, 3 * 1000);
        return { greeting, timeGreeting, motivated }
    }
}).mount('#app')