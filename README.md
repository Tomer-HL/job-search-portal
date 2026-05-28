# JobTrack — Community Edition

A free, local-first job application tracker. Your data stays in your browser. No server. No signup. No ads.

מערכת חופשית לניהול חיפוש עבודה — הנתונים שלך נשמרים אצלך בדפדפן בלבד. ללא שרת, ללא הרשמה, ללא פרסומות.

---

## 🇮🇱 עברית

### מה זה?

JobTrack היא אפליקציית ווב פשוטה לניהול חיפוש עבודה. אפשר לעקוב אחרי משרות שהגשתם, סטטוס כל אחת מהן (הוגשה / שיחה ראשונית / ראיון / הצעה / נדחה), הערות אישיות, תאריכים וקישורים. הכול נשמר בדפדפן שלכם בלבד.

### תכונות עיקריות

- **מקומי לחלוטין** — הנתונים נשמרים ב-`localStorage` של הדפדפן. אף אחד חוץ ממכם לא רואה אותם.
- **דו-לשוני** — עברית ואנגלית, החלפה בלחיצה.
- **PWA** — ניתן להתקין כאפליקציה במחשב או בטלפון, עובד גם אופליין.
- **שני תצוגות** — טבלה לעבודה רצינית, קנבן (Kanban) לתמונה מהירה.
- **ייצוא/ייבוא** — גיבוי הכל לקובץ JSON בלחיצה, ייבוא בקלות מאותו קובץ.
- **סנכרון אופציונלי** — אם רוצים, אפשר לחבר חשבון Firebase חינמי לסנכרון בין מכשירים. הגדרה לוקחת 5 דקות.

### איך מתחילים?

הכי פשוט: בקרו ב-[הקישור הציבורי](#) (אם מארחים ב-GitHub Pages) או הורידו את ה-ZIP ופתחו את `index.html` בדפדפן.

#### התקנה כאפליקציה (PWA) במכשיר נייד

1. פתחו את האתר בדפדפן (Chrome / Safari).
2. לחצו על תפריט הדפדפן.
3. בחרו "הוסף למסך הבית" / "Install app".

#### התקנה כאפליקציה במחשב

ב-Chrome / Edge: יופיע סמל "התקן" בשורת הכתובת. לחצו עליו.

### הפעלת סנכרון בין מכשירים (אופציונלי)

ברירת המחדל: הנתונים נשמרים רק בדפדפן הזה. אם אתם רוצים שאותם נתונים יופיעו גם בטלפון:

1. צרו פרויקט חינמי ב-[Firebase Console](https://console.firebase.google.com).
2. הוסיפו אפליקציית Web והעתיקו את האובייקט `firebaseConfig`.
3. הפעילו Firestore Database (מצב production).
4. ב-JobTrack, לחצו על שבב הסטטוס בפינה והדביקו את ה-config.

### טיפים לחיפוש עבודה יעיל

- עדכנו את הסטטוס מיד אחרי כל אינטראקציה — זה בונה תמונה אמיתית של המספרים.
- אחרי כל ראיון, רשמו הערות: שם המראיין/ת, נושאים שעלו, איך הרגשתם, מה ללמוד.
- אל תפחדו "להגיש המון". המספרים בדשבורד עוזרים להבין איפה אתם עומדים.
- גבו את הנתונים פעם בשבוע באמצעות "ייצוא".

---

## 🇬🇧 English

### What is this?

JobTrack is a simple web app for managing your job search. Track jobs you've applied to, their status (Applied / Phone Screen / Interview / Offer / Rejected), personal notes, dates, and links. Everything stays in your browser.

### Features

- **Fully local** — Data stored in browser `localStorage`. Nobody but you sees it.
- **Bilingual** — Hebrew and English, switchable with one click.
- **PWA** — Installable on desktop or mobile, works offline.
- **Two views** — Table for serious work, Kanban for a quick visual.
- **Export/Import** — Back up everything to JSON, restore from the same file.
- **Optional sync** — Hook up a free Firebase account to sync across devices. 5-min setup.

### Getting started

Easiest: visit the [public link](#) (if hosted on GitHub Pages) or download the ZIP and open `index.html` in any browser.

#### Install as an app (mobile)

1. Open the site in Chrome / Safari.
2. Tap the browser menu.
3. Pick "Add to Home Screen" / "Install app".

#### Install as an app (desktop)

In Chrome / Edge: an "Install" icon appears in the address bar.

### Enable cross-device sync (optional)

By default everything stays in this browser only. To sync with your phone:

1. Create a free project on [Firebase Console](https://console.firebase.google.com).
2. Add a Web app and copy the `firebaseConfig` object.
3. Enable Firestore Database (production mode).
4. In JobTrack, click the sync chip in the top corner and paste the config.

### Tips for an effective search

- Update status immediately after each interaction — builds an honest picture.
- After every interview, jot notes: interviewer names, topics, how you felt, lessons.
- Don't be afraid to apply broadly. The dashboard numbers show where you stand.
- Back up weekly using "Export".

---

## Hosting on GitHub Pages

1. Fork or create a repo with these files at the root.
2. In repo settings → Pages → Source: pick the main branch.
3. The site will be live at `https://<your-username>.github.io/<repo-name>/`.

## License

MIT — do whatever you want, no warranty. Made with care for job seekers everywhere. בהצלחה!
