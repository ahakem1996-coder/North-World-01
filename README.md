# North World Transport Management

The transport management application is independent of the legacy inventory transfer planner.

## Local setup

Requirements: Node.js 20.19+ and PostgreSQL 14+.

1. Create a PostgreSQL database and copy `.env.example` to `.env` in this project root.
2. Set `DATABASE_URL` and a random `SESSION_SECRET` of at least 32 characters. Keep real credentials out of source control.
3. From `server/`, run `npm ci`, `npm run prisma:generate`, and `npm run prisma:migrate`.
4. Run `npm start` from `server/`, then open `http://localhost:4000`. Create the first administrator with a password of at least 12 characters.

Express serves the browser interface from `client/` and the API from the same origin. User accounts and operational records are stored in PostgreSQL.

## Render and Supabase

`render.yaml` configures a Render web service. Create a Supabase PostgreSQL project, then add its connection string as the `DATABASE_URL` secret in Render. The blueprint generates `SESSION_SECRET` and binds the service to `0.0.0.0`. Use an always-on paid plan for operational use; a free instance may sleep.

## Manual data entry and integrations

Administrators can enter clearance details and attach supporting clearance and transport-document files (PDF, JPG, or PNG; up to four files and 8 MB total per entry). Attachments are stored in PostgreSQL and can be downloaded from the clearance results and document archive. Uploaded files and manually entered document references are not verified by Fasah or other government platforms; the application does not issue government documents.

Clearance records can be edited from search results until they are linked to a trip. Editing preserves existing attachments unless new ones are added, and still requires official-proof confirmation for a cleared status. The clearance screen exports all records to an Arabic Excel workbook, or only records matching the current declaration/container search.

Administrators can upload a text-based Fasah appointment confirmation PDF (up to 5 MB and 5 pages). The server extracts booking, vehicle, driver, entry, and exit fields locally; the administrator reviews and confirms them before the appointment and source PDF are saved. Scanned PDFs are not OCR-processed. Appointment tickets are stored separately and do not establish that customs clearance has been granted.

When PDF files are selected as transport-document attachments, the server attempts to extract a labeled transport document number and issue date and fills the reference fields. Review the extracted values before saving. Text-based PDFs are supported; scanned PDFs require manual entry.

When a cleared record is selected for a trip, the app finds the newest saved appointment with the same declaration/container pair and matches its driver phone to an active driver account. A unique match selects the driver automatically; the associated available truck is selected when there is exactly one. If there is no unique match or truck, the administrator can choose manually.

As soon as a text-based appointment PDF is extracted, its declaration, container, original port name, and appointment date automatically prefill the manual clearance form. The port name is taken directly from the PDF; known port cities are filled automatically, and an additional city field appears for an unrecognized port. The clearance date is prefilled from the PDF appointment date. The manual form also has a button to load data from the most recently extracted PDF in the current session, or the latest saved PDF appointment if there is no newer extraction. It preserves other entered values and attachments. After reviewing and saving the appointment and PDF, the clearance form is opened with those values. Size defaults to 40 feet; container type remains manual. Saving a cleared record still requires explicit confirmation against official clearance proof; an appointment ticket alone does not confirm that clearance has been granted.

Administrators can download Excel templates and import up to 500 driver or truck records per `.xlsx` file (maximum 3 MB). Imports are validated as a whole; duplicate or invalid rows prevent the batch from being saved. A row matching a soft-deleted driver restores that record. Truck templates can optionally associate a truck with an active driver using the driver's national/residency ID.

Deleting a truck permanently removes its fleet record and releases its fleet number, plate, and serial number for reuse. Active trips still prevent deletion. Completed trips and their reports remain available using the truck details saved on each trip. The migration also purges legacy soft-deleted truck rows after saving their trip snapshots.

Drivers can record fuel or maintenance expenses against accepted trips and attach up to four PDF, JPG, or PNG receipts (8 MB total). Administrators can review the consolidated expense list, including the truck, driver, residency number, amount, type, notes, and downloadable attachments. Drivers can access attachments for their own expenses only.

The administrator's trip-tracking screen shows accepted trips, driver-reported milestones, and their timestamps. It refreshes every 30 seconds while open; it does not provide live GPS tracking.

Administrators can use the separate PDF tools screen to merge local PDF files or split a PDF into selected page ranges. Processing happens in the browser using the `pdf-lib` browser bundle served by the application; document contents are not sent to the server.

The app is not yet deployed or connected to government APIs. The database starts empty; enter the company's real truck, driver, port, and account records before operations.

## VPS templates

`deploy/north-world-transport.service` and `deploy/north-world-transport.nginx.conf` are starting templates for a Linux VPS. Replace the sample domain and certificate paths, configure PostgreSQL and HTTPS, and apply migrations before enabling the service.
