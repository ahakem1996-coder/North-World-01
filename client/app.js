const LANGUAGE_KEY = "masar-transport-language";
const TRANSLATIONS = Object.freeze({
  "عَالَمُ الشَّمَالِ لإدارة النقل": "North World Transport Management",
  "عَالَمُ الشَّمَالِ | إدارة النقل والحاويات": "North World | Transport & Container Management",
  "عَالَمُ الشَّمَالِ - الصفحة الرئيسية": "North World - Home",
  "عَالَمُ الشَّمَالِ": "North World",
  "إدارة النقل والحاويات": "Transport & Container Management",
  "إدارة النقل": "Transport Management",
  "إدارة العمليات": "Operations Management",
  "مدير النظام": "System Administrator",
  "الرئيسية": "Home",
  "القائمة الرئيسية": "Main Menu",
  "لوحة التحكم": "Dashboard",
  "استعلام الفسح": "Clearance Lookup",
  "استعلام عن فسح": "Look Up Clearance",
  "إصدار وثيقة نقل": "Issue Transport Document",
  "إصدار وثيقة": "Issue Document",
  "النقل الداخلي": "Domestic Transport",
  "إدارة العمليات الداخلية": "Domestic Operations Management",
  "أسعار الشركات": "Company Rates",
  "أسعار وتعريفة الشركات": "Company Tariff Rates",
  "الفواتير والحسابات": "Invoices & Accounts",
  "الفواتير وحسابات الشركات": "Invoices & Company Accounts",
  "إنشاء فاتورة جديدة": "Create New Invoice",
  "إصدار فاتورة جديدة": "Issue New Invoice",
  "رحلة نقل داخلي جديدة": "New Domestic Trip",
  "بيانات الرحلة والنقل الداخلي": "Domestic Trip Details",
  "حفظ وإرسال الطلب للسائق": "Save and Send Request to Driver",
  "تعديل رحلة النقل الداخلي": "Edit Domestic Trip",
  "حفظ تعديلات الرحلة": "Save Trip Changes",
  "لا يمكن تعديل أو حذف رحلة بدأت أو أُضيفت لفاتورة أو لها مصروفات.": "Trips that have started, been invoiced, or have expenses cannot be edited or deleted.",
  "هل تريد حذف رحلة النقل الداخلي للشركة ": "Delete the domestic trip for ",
  "؟ سيُعاد تعيين الشاحنة كمتاحة.": "? The truck will be released.",
  "تم تعديل بيانات رحلة النقل الداخلي.": "Domestic trip updated.",
  "تم حذف رحلة النقل الداخلي وإتاحة الشاحنة.": "Domestic trip deleted and the truck released.",
  "سجل عمليات النقل الداخلي": "Domestic Operations Log",
  "جدول تعريفة الأسعار المسجلة": "Tariff Rates Table",
  "سجل الفواتير الصادرة": "Issued Invoices Log",
  "الأسطول والسائقون": "Fleet & Drivers",
  "تتبع الرحلات": "Trip Tracking",
  "تتبع رحلات السائقين": "Driver Trip Tracking",
  "رحلات ملغاة": "Cancelled Trips",
  "الملغاة": "Cancelled",
  "ملغاة": "Cancelled",
  "إلغاء الرحلة": "Cancel Trip",
  "إتمام الرحلة": "Complete Trip",
  "لا يمكن إلغاء رحلة غير نشطة أو مرتبطة بفاتورة.": "Inactive or invoiced trips cannot be cancelled.",
  "لا يمكن إتمام رحلة مكتملة أو ملغاة.": "Completed or cancelled trips cannot be completed.",
  "ألغيت الرحلة": "Trip cancelled",
  "تم تحرير الشاحنة": "Truck released",
  "من تاريخ العملية": "From operation date",
  "إلى تاريخ العملية": "To operation date",
  "ابحث باسم الشركة": "Search by company",
  "ترتيب العمليات": "Operation order",
  "الأقدم إلى الأحدث": "Oldest to newest",
  "الأحدث إلى الأقدم": "Newest to oldest",
  "تحديد كل النتائج الظاهرة": "Select all visible results",
  "عملية محددة": "selected operations",
  "ملفات PDF للدمج": "PDFs to merge",
  "PDF الفسح فقط": "Clearance PDFs only",
  "PDF وثائق النقل فقط": "Transport document PDFs only",
  "PDF الفسح ووثائق النقل": "Clearance and transport PDFs",
  "تصدير PDF للعمليات المحددة": "Export selected operations as PDF",
  "تظهر الوثائق وطلبات الرحلات المحفوظة في قاعدة بيانات الشركة.": "Documents and trip requests saved in the company database appear here.",
  "اختر عملية واحدة على الأقل لتصدير PDF.": "Select at least one operation to export a PDF.",
  "تم دمج ملفات PDF المحددة وتنزيلها.": "The selected PDFs were merged and downloaded.",
  "جارٍ تجهيز ملف PDF الموحد...": "Preparing the merged PDF...",
  "تكاليف الرحلات": "Trip Expenses",
  "مصروفات التشغيل": "Operating Expenses",
  "سجل موحد لمصروفات السائقين المسجلة على رحلاتهم.": "A unified record of driver expenses reported for their trips.",
  "إجمالي التكاليف المسجلة": "Total Recorded Expenses",
  "ريال سعودي": "Saudi Riyal",
  "عدد المصروفات": "Expense Count",
  "تعديل تكلفة الرحلة": "Edit Trip Expense",
  "مرفقات جديدة (اختياري)": "New Attachments (Optional)",
  "اترك الحقل فارغاً للاحتفاظ بالمرفقات الحالية، أو اختر ملفات لاستبدالها.": "Leave empty to keep the current attachments, or choose files to replace them.",
  "هل تريد حذف تكلفة الرحلة للسائق ": "Delete this trip expense for driver ",
  "تم تحديث تكلفة الرحلة.": "Trip expense updated.",
  "تم حذف تكلفة الرحلة ومرفقاتها.": "Trip expense and its attachments deleted.",
  "لكل السائقين": "All Drivers",
  "سجل مصروفات السائقين": "Driver Expense Records",
  "تُربط كل تكلفة بالرحلة والشاحنة التي أُضيفت عليها.": "Each expense is linked to its trip and truck.",
  "رقم السيارة": "Vehicle Plate",
  "الرحلة / الحاوية": "Trip / Container",
  "التكلفة": "Cost",
  "نوع التكلفة": "Expense Type",
  "المستندات": "Documents",
  "مرفقات التكلفة": "Expense Attachments",
  "مستندات إثبات التكلفة (PDF أو JPG أو PNG)": "Expense supporting documents (PDF, JPG, or PNG)",
  "حتى 4 ملفات، بإجمالي 8 MB (الملف الواحد حتى 5 MB).": "Up to 4 files, 8 MB total (up to 5 MB per file).",
  "تاريخ التسجيل": "Recorded At",
  "سجل تكاليف الرحلات المرتبطة بحسابك.": "Trip expenses linked to your account.",
  "إضافة تكلفة رحلة": "Add Trip Expense",
  "أدخل المصروف المرتبط بإحدى رحلاتك المقبولة.": "Enter an expense for one of your accepted trips.",
  "الرحلة المرتبطة": "Associated Trip",
  "بنزين": "Fuel",
  "قيمة المبلغ (ريال)": "Amount (SAR)",
  "اختر الرحلة": "Select a trip",
  "الملاحظات": "Notes",
  "تفاصيل إضافية عن التكلفة (اختياري)": "Additional expense details (optional)",
  "تظهر الرحلات بعد قبولها.": "Trips are available after you accept them.",
  "حفظ التكلفة": "Save Expense",
  "مصروفاتي المسجلة": "My Recorded Expenses",
  "لا توجد تكاليف مسجلة.": "No expenses recorded.",
  "رفع تذكرة موعد فسح PDF": "Upload Fasah Appointment PDF",
  "استخراج تفاصيل الحجز والمركبة والسائق والدخول والخروج محلياً، ثم مراجعتها قبل الحفظ.": "Extract booking, vehicle, driver, entry, and exit details locally, then review them before saving.",
  "ملف PDF الخاص بفسح": "Fasah PDF file",
  "ملف PDF نصي حتى 5 MB. الملفات الممسوحة ضوئياً غير مدعومة حالياً.": "Text-based PDF up to 5 MB. Scanned PDFs are not supported yet.",
  "استخراج البيانات": "Extract Data",
  "تفاصيل الحجز": "Booking Details",
  "رقم تذكرة المشغل": "Operator Ticket Number",
  "المنطقة / البوابة": "Zone / Gate",
  "اسم مشغل الميناء": "Port Contractor Name",
  "رقم مشغل الميناء": "Port Contractor ID",
  "تاريخ الموعد": "Appointment Date",
  "وقت الموعد": "Appointment Time",
  "تفاصيل المركبة": "Vehicle Details",
  "نوع لوحة المركبة": "Vehicle Plate Type",
  "اللون": "Color",
  "رقم تتبع المركبة": "Vehicle Reference ID",
  "الرقم التسلسلي للمركبة": "Vehicle Serial ID",
  "طراز المركبة": "Vehicle Model",
  "تفاصيل السائق": "Driver Details",
  "رقم جوال السائق": "Driver Mobile Number",
  "رقم رخصة السائق": "Driver License Number",
  "معلومات الدخول": "Entry Information",
  "الموقع داخل الميناء": "Location Within Port",
  "رقم البوليصة": "BL Number",
  "نوع البضاعة / الغرض": "Cargo Type / Purpose",
  "معلومات الخروج": "Exit Information",
  "الرقم المرجعي": "Reference Number",
  "الميناء / الموعد": "Port / Appointment",
  "المركبة": "Vehicle",
  "السائق / الجوال": "Driver / Mobile",
  "بيانات الخروج": "Exit Details",
  "البوليصة / البضاعة": "BL / Cargo",
  "الملف الأصلي": "Original File",
  "ملف PDF الأصلي": "Original PDF",
  "موعد فسح": "Fasah Appointment",
  "موعد محفوظ": "Appointment Saved",
  "حفظ تعديلات الموعد": "Save Appointment Changes",
  "اترك ملف PDF فارغاً للاحتفاظ بالملف الحالي، أو ارفع ملفاً جديداً لاستبداله.": "Leave the PDF empty to keep the current file, or upload a new one to replace it.",
  "هل تريد حذف موعد الفسح ": "Delete Fasah appointment ",
  "؟ لا يمكن التراجع عن هذا الإجراء.": ". This action cannot be undone.",
  "تم تحديث موعد فسح.": "Fasah appointment updated.",
  "تم حذف موعد فسح وملف PDF المرتبط به.": "Fasah appointment and its associated PDF deleted.",
  "الإجراءات": "Actions",
  "تصدير الفسح إلى Excel": "Export clearances to Excel",
  "إضافة بيانات الفسح": "Add clearance data",
  "تعديل بيانات الفسح": "Edit clearance data",
  "حفظ تعديلات الفسح": "Save clearance changes",
  "تم تحديث بيانات الفسح.": "Clearance data updated.",
  "تم تصدير بيانات الفسح إلى Excel.": "Clearance data exported to Excel.",
  "لا يمكن تعديل بيانات فسح مرتبطة برحلة.": "Clearance records linked to trips cannot be edited.",
  "الرقم المرجعي للحجز": "Booking Reference Number",
  "رقم لوحة المركبة": "Vehicle Plate Number",
  "رقم البيان": "Declaration Number",
  "جوال السائق": "Driver Phone",
  "اختر المقاس": "Select size",
  "اختر النوع": "Select type",
  "اختر حالة الفسح": "Select clearance status",
  "استخدام بيانات الموعد للرحلة": "Use Appointment for Trip",
  "رقم جوال التذكرة لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.": "The ticket phone does not match exactly one active driver with an account.",
  "رقم الجوال في موعد الفسح لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.": "The appointment phone does not match exactly one active driver with an account.",
  "تم مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.": "The driver matched, but no available truck is assigned to them.",
  "تم اختيار السائق تلقائياً بناءً على رقم الجوال في موعد الفسح.": "The driver was selected automatically using the phone number on the Fasah appointment.",
  "لم يُعثر على موعد فسح مطابق للبيان والحاوية. اختر السائق يدوياً.": "No Fasah appointment matched this declaration and container. Select the driver manually.",
  "موعد الفسح المطابق لا يحتوي على رقم جوال السائق. اختر السائق يدوياً.": "The matching Fasah appointment has no driver phone number. Select the driver manually.",
  "الحاوية مرتبطة ببيان جمركي مختلف عن بيانات الموعد.": "This container is linked to a different customs declaration than the appointment.",
  "الحاوية مسجلة لكن حالة الفسح ليست مفسوحة، لذلك لا يمكن إصدار طلب رحلة.": "The container is registered but not cleared, so a trip request cannot be issued.",
  "تعذر العثور على موعد فسح محفوظ.": "Could not find a saved Fasah appointment.",
  "لا تتضمن التذكرة رقم بيان وحاوية صالحين.": "The ticket does not contain a valid declaration and container number.",
  "تم تسجيل بيانات الحاوية من التذكرة والانتقال إلى إصدار الرحلة.": "Container details were recorded from the ticket and the trip form is ready.",
  "تم حفظ موعد فسح مع ملف PDF، وتم تعبئة نموذج الفسح تلقائياً.": "The Fasah appointment and PDF were saved, and the clearance form was filled automatically.",
  "تم مطابقة رقم الجوال مع السائق المسجل.": "The phone number matched the registered driver.",
  "تم ملء البيان والحاوية واسم الميناء وتاريخ الموعد من PDF. المقاس افتراضياً 40 قدم؛ أدخل نوع الحاوية وراجع التاريخ وفق إثبات الفسح الرسمي.": "Declaration, container, port name, and appointment date were filled from the PDF. Size defaults to 40 feet; enter the container type and verify the date against official clearance proof.",
  "تاريخ الفسح (من تاريخ الموعد في PDF)": "Clearance date (from the PDF appointment date)",
  "جلب أحدث بيانات مستخرجة من PDF": "Load latest data extracted from PDF",
  "سيتم استخدام أحدث تذكرة تم استخراج بياناتها.": "The most recently extracted PDF ticket will be used.",
  "لا توجد بيانات PDF محفوظة. ارفع تذكرة فسح واستخرج بياناتها أولاً.": "No PDF data is saved. Upload and extract a Fasah ticket first.",
  "أحدث تذكرة PDF لا تحتوي رقم البيان أو رقم الحاوية.": "The latest PDF ticket does not contain a declaration or container number.",
  "تم جلب بيانات الفسح من أحدث PDF مستخرج.": "Clearance data was loaded from the latest extracted PDF.",
  "تم جلب البيانات المتاحة من أحدث PDF مستخرج. أكمل رقم البيان أو الحاوية الناقص يدوياً.": "Available data was loaded from the latest extracted PDF. Enter the missing declaration or container number manually.",
  "أؤكد أن حالة الفسح وتاريخه مطابقان لإثبات فسح رسمي، وليس لتذكرة موعد فقط.": "I confirm the clearance status and date match official clearance proof, not just an appointment ticket.",
  "أكد حالة الفسح وتاريخه من مستند رسمي قبل الحفظ.": "Confirm the clearance status and date using official documentation before saving.",
  "تم إصدار وثيقة لهذا البيان.": "A document has already been issued for this declaration.",
  "أدخل تاريخ الفسح للحاوية المفسوحة.": "Enter the clearance date for a cleared container.",
  "لا يمكن استخدام بيانات الموعد لإصدار رحلة قبل تأكيد حالة الفسح.": "Appointment details cannot be used to create a trip until clearance is confirmed.",
  "تم حفظ بيانات الحاوية من الموعد، ومطابقة جوال السائق.": "Container details were saved from the appointment, and the driver's phone was matched.",
  "بوليصة الدخول": "Entry BL Number",
  "بيان الدخول": "Entry Declaration Number",
  "حاوية الدخول": "Entry Container Number",
  "بضاعة الدخول / الغرض": "Entry Cargo / Purpose",
  "الرقم التسلسلي للدخول": "Entry Serial Number",
  "موقع الدخول داخل الميناء": "Entry Location Within Port",
  "بوليصة الخروج": "Exit BL Number",
  "بيان الخروج": "Exit Declaration Number",
  "حاوية الخروج": "Exit Container Number",
  "بضاعة الخروج / الغرض": "Exit Cargo / Purpose",
  "الرقم التسلسلي للخروج": "Exit Serial Number",
  "موقع الخروج داخل الميناء": "Exit Location Within Port",
  "اختر ملف PDF صحيحاً.": "Choose a valid PDF file.",
  "ارفع ملف PDF لتذكرة الموعد.": "Upload the appointment PDF.",
  "ابحث في السجلات أو ارفع تذكرة موعد فسح PDF لاستخراج بياناتها.": "Search records or upload a Fasah appointment PDF to extract its details.",
  "البحث يشمل بيانات الفسح المسجلة ومواعيد PDF المحفوظة.": "Search includes recorded clearances and saved PDF appointments.",
  "ابحث عن بيان أو موعد فسح مسجل.": "Search for a saved clearance or Fasah appointment.",
  "رقم مرجع الحجز مسجل مسبقاً.": "This booking reference is already registered.",
  "بيانات الحجز لا تطابق ملف PDF المرفق.": "The booking details do not match the attached PDF.",
  "تعذر قراءة الملف. ارفع تذكرة فسح بصيغة PDF ولا يتجاوز حجمها 5 MB.": "Could not read the file. Upload a Fasah PDF ticket no larger than 5 MB.",
  "الملف ليس تذكرة موعد فسح بالتنسيق المدعوم.": "This PDF is not a supported Fasah appointment ticket.",
  "تعذر استخراج النص من الملف. استخدم PDF نصياً غير ممسوح ضوئياً.": "Could not extract text. Use a text-based PDF, not a scan.",
  "الحد الأقصى لتذكرة الموعد هو 5 صفحات.": "Appointment tickets are limited to 5 pages.",
  "تحقق من الرقم المرجعي والحقول المدخلة.": "Check the booking reference and entered fields.",
  "حفظ الموعد وملف PDF": "Save Appointment and PDF",
  "إلغاء": "Cancel",
  "سجل مواعيد فسح المرفوعة": "Uploaded Fasah Appointments",
  "تفاصيل الحجز والمركبة والسائق ومعلومات الدخول والخروج.": "Booking, vehicle, driver, entry, and exit details.",
  "تم استخراج البيانات؛ راجعها ثم احفظ السجل.": "Data extracted. Review it and save the record.",
  "بعض الحقول الأساسية لم تُستخرج. أكملها يدوياً قبل الحفظ.": "Some required fields were not extracted. Complete them before saving.",
  "تم حفظ موعد فسح مع ملف PDF. هذه بيانات التذكرة وليست تأكيداً لحالة الفسح.": "Fasah appointment and PDF saved. Ticket data does not confirm customs clearance status.",
  "لا توجد مواعيد فسح محفوظة.": "No Fasah appointments saved.",
  "لم يُعثر على مواعيد فسح مطابقة.": "No matching Fasah appointments found.",
  "لا توجد رحلات مقبولة لإضافة تكلفة.": "There are no accepted trips to add an expense to.",
  "تم تسجيل التكلفة.": "Expense recorded.",
  "تحقق من مبلغ ونوع المصروف والرحلة.": "Check the expense amount, type, and trip.",
  "لا يمكن إضافة تكلفة لهذه الرحلة.": "An expense cannot be added to this trip.",
  "هذه الخدمة متاحة لحسابات السائقين فقط.": "This feature is only available to driver accounts.",
  "رفع سيارات من Excel": "Import Trucks from Excel",
  "تنزيل نموذج السيارات": "Download Truck Template",
  "رفع سائقين من Excel": "Import Drivers from Excel",
  "تنزيل نموذج السائقين": "Download Driver Template",
  "تحميل نموذج Excel": "Download Excel Template",
  "اختر ملف Excel بصيغة .xlsx.": "Choose an Excel .xlsx file.",
  "حجم ملف Excel يجب ألا يتجاوز 3 MB.": "The Excel file must not exceed 3 MB.",
  "جارٍ استيراد البيانات...": "Importing data...",
  "تم استيراد ": "Imported ",
  " سائقاً بنجاح.": " driver(s) successfully.",
  " سيارة بنجاح.": " truck(s) successfully.",
  "صف ": "Row ",
  "بيانات ناقصة أو غير صحيحة.": "Missing or invalid data.",
  "تكرار بيانات داخل الملف.": "Duplicate data in the file.",
  "مسجل مسبقاً في النظام.": "Already registered in the system.",
  "رقم هوية السائق غير موجود أو غير نشط.": "The driver's national ID was not found or is inactive.",
  "تعذر قراءة ملف Excel. ارفع ملفاً صالحاً بصيغة .xlsx.": "Could not read the Excel file. Upload a valid .xlsx file.",
  "الحد الأقصى 500 صف في ملف Excel.": "The Excel file limit is 500 rows.",
  "الملف لا يحتوي على بيانات للاستيراد.": "The file contains no data to import.",
  "استخدم نموذج Excel الصحيح مع إبقاء صف العناوين كما هو.": "Use the correct Excel template and keep the header row unchanged.",
  "لم يتم استيراد البيانات بسبب وجود صفوف غير صحيحة:": "No data was imported because some rows are invalid:",
  "لم يتم استيراد البيانات بسبب وجود تعارض في الصفوف:": "No data was imported because some rows conflict:",
  "بيانات الصف غير صالحة.": "The row data is invalid.",
  "تم تنزيل نموذج Excel.": "Excel template downloaded.",
  "لا توجد شاحنة متاحة مرتبطة بهذا السائق. عيّن شاحنة متاحة من شاشة الأسطول.": "No available truck is assigned to this driver. Assign an available truck in Fleet.",
  "توجد أكثر من شاحنة متاحة مرتبطة بهذا السائق. اختر الشاحنة يدوياً.": "More than one available truck is assigned to this driver. Select a truck manually.",
  "الشاحنة المحددة لا ترتبط بسائق نشط له حساب. حدّث تعيين السائق من شاشة الأسطول.": "The selected truck is not assigned to an active driver with an account. Update its driver assignment in Fleet.",
  "متابعة الأسطول": "Fleet Tracking",
  "تابع الرحلات بعد قبول السائق وتحديث مراحلها. لا تعرض هذه الشاشة موقع GPS مباشراً.": "Track trips after the driver accepts them and records stage updates. This screen does not show live GPS location.",
  "تحديث الآن": "Refresh now",
  "اختر الميناء": "Select a port",
  "ميناء الملك عبدالله": "King Abdullah Port",
  "الدمام": "Dammam",
  "بعد قبول السائق": "After driver acceptance",
  "تمت إعادة الفارغ": "Empty container returned",
  "آخر تحديث للبيانات": "Last Data Refresh",
  "تحديث تلقائي كل 30 ثانية عند فتح الشاشة": "Auto-refresh every 30 seconds while this screen is open",
  "عرض الرحلات": "Show Trips",
  "كل الرحلات المقبولة": "All accepted trips",
  "ابحث عن سائق أو شاحنة أو حاوية": "Search by driver, truck, or container",
  "لا توجد رحلات مقبولة تطابق البحث أو الفلتر.": "No accepted trips match this search or filter.",
  "المرحلة الحالية": "Current Stage",
  "آخر تحديث": "Last update",
  "قُبل الطلب في": "Request accepted",
  "البيان:": "Declaration:",
  "الحاوية:": "Container:",
  "المسار": "Route",
  "تم تحديث تتبع الرحلات.": "Trip tracking refreshed.",
  "أرشيف الوثائق": "Document Archive",
  "التقارير والتصدير": "Reports & Export",
  "حسابات المستخدمين": "User Accounts",
  "الإعداد الأول": "Initial Setup",
  "إنشاء حساب الأدمن": "Create Administrator Account",
  "أنشئ حساب المدير الأول لإدارة النظام وإضافة حسابات السائقين.": "Create the first administrator account to manage the system and add driver accounts.",
  "الدخول إلى النظام": "Sign in",
  "مرحباً بعودتك": "Welcome back",
  "سجّل الدخول للمتابعة إلى الواجهة المناسبة لحسابك.": "Sign in to continue to the workspace for your account.",
  "اسم المستخدم": "Username",
  "كلمة المرور": "Password",
  "تأكيد كلمة المرور": "Confirm password",
  "اسم مستخدم فريد": "Unique username",
  "١٢ حرفاً على الأقل": "At least 12 characters",
  "أعد كتابة كلمة المرور": "Re-enter your password",
  "تسجيل الدخول": "Sign in",
  "تسجيل الخروج": "Sign out",
  "خروج": "Sign out",
  "نسخة تجريبية محلية؛ الحسابات لا تُشارك بين الأجهزة.": "Local demo; accounts are not shared between devices.",
  "وضع العرض التجريبي": "Demo mode",
  "البيانات محفوظة محلياً على هذا الجهاز.": "Data is stored locally on this device.",
  "فسح": "Fasah",
  "بيان": "Bayan",
  "نقل": "Naql",
  "تجريبي": "Demo",
  "تجريبية": "Demo",
  "حالة الربط التجريبي": "Demo integration status",
  "فسح ونقل وبيان": "Fasah, Naql & Bayan",
  "نظرة عامة": "Overview",
  "أهلاً بك، مدير النظام": "Welcome, Administrator",
  "إليك ملخص حركة الأسطول والعمليات لهذا اليوم.": "Here is today's fleet and operations summary.",
  "عملية نقل جديدة": "New Transport",
  "إجمالي الأسطول النشط": "Active Fleet",
  "نشط": "Active",
  "شاحنة مسجلة": "Registered trucks",
  "وثائق النقل المصدرة": "Transport Documents Issued",
  "وثائق النقل المسجلة": "Recorded Transport Documents",
  "إجمالي الأرشيف": "Archive total",
  "وثيقة": "document",
  "حاويات مفسوحة اليوم": "Containers Cleared Today",
  "مفسوحة": "Cleared",
  "حسب بيانات العرض": "Based on demo data",
  "حسب بيانات الفسح المسجلة": "Based on recorded clearance details",
  "شاحنات في الموانئ": "Trucks at Ports",
  "قيد التشغيل": "In operation",
  "شاحنة": "truck",
  "آخر العمليات": "Recent Operations",
  "أحدث وثائق النقل المسجلة في النظام": "Latest transport documents recorded in the system",
  "عرض الأرشيف": "View Archive",
  "رقم الوثيقة": "Document Number",
  "الحاوية": "Container",
  "العميل": "Customer",
  "الميناء": "Port",
  "الحالة": "Status",
  "إجراءات": "Actions",
  "صادرة": "Issued",
  "عرض / طباعة الوثيقة": "View / Print Document",
  "عرض في الأرشيف": "View in Archive",
  "لا توجد عمليات بعد. ابدأ بالاستعلام عن بيان.": "No operations yet. Start by looking up a clearance.",
  "حالة الربط": "Integration Status",
  "حالة الخدمات التجريبية": "Demo service status",
  "مباشر": "Live",
  "منصة فسح": "Fasah Platform",
  "الاستعلام عن بيانات الفسح": "Look up clearance information",
  "منصة بيان": "Bayan Platform",
  "إصدار وثائق النقل": "Issue transport documents",
  "منصة نقل": "Naql Platform",
  "خدمة محاكاة محلية": "Local simulation service",
  "متصل تجريبياً": "Connected (Demo)",
  "بانتظار الربط": "Awaiting integration",
  "لن تُعرض الخدمة على أنها متصلة حتى ينجح فحص الاتصال الرسمي.": "A service will not be marked connected until its official connection test succeeds.",
  "الوصول السريع": "Quick Access",
  "ابدأ عملية أو راجع بياناتك بسرعة": "Start a process or review your data",
  "ابحث برقم البيان أو الحاوية": "Search by declaration or container number",
  "إنشاء وثيقة نقل جديدة": "Create a new transport document",
  "التقارير": "Reports",
  "تصفية وتصدير العمليات": "Filter and export operations",
  "السجلات الجمركية": "Customs Records",
  "بيانات الفسح": "Clearance Records",
  "ابحث في السجلات وأدخل بيانات الفسح يدوياً.": "Search records and enter clearance details manually.",
  "إدخال بيان يدوياً": "Enter Clearance Manually",
  "نوع الحاوية": "Container Type",
  "مدينة الميناء": "Port City",
  "اسم الميناء": "Port Name",
  "معلق": "On Hold",
  "حفظ بيانات الفسح": "Save Clearance Details",
  "هذه بيانات مدخلة يدوياً ولا يتم التحقق منها لدى منصة فسح.": "These details are entered manually and are not verified with Fasah.",
  "البحث يعرض السجلات المحفوظة يدوياً في قاعدة بيانات الشركة.": "Search shows records entered manually in the company database.",
  "إدخال يدوي": "Manual Entry",
  "بحث": "Search",
  "إنشاء طلب رحلة": "Create Trip Request",
  "ابحث عن بيان مسجل يدوياً أو أدخل بياناته.": "Search manually recorded clearances or enter new details.",
  "جارٍ البحث في سجلات الفسح المحفوظة…": "Searching saved clearance records…",
  "البيانات مدخلة يدوياً وغير متحققة من منصة فسح": "Manually entered; not verified by Fasah",
  "بيانات النقل": "Transport Details",
  "تسجيل وثيقة ورحلة": "Record Document and Trip",
  "سجّل الرحلة ورقم وثيقة النقل الصادر خارجياً إن توفر.": "Record the trip and an externally issued transport document number if available.",
  "اختر بياناً مفسوحاً مدخلاً يدوياً": "Select a manually entered cleared declaration",
  "مرجع وثيقة النقل": "Transport Document Reference",
  "اختياري — يُستخرج الرقم والتاريخ تلقائياً من PDF المرفق ويمكن تعديله": "Optional — the number and date are extracted automatically from the attached PDF and can be edited",
  "رقم وثيقة النقل": "Transport Document Number",
  "تاريخ الوثيقة": "Document Date",
  "المرجع المستخرج أو المدخل يُحفظ ولا يعني أن النظام أصدر الوثيقة أو تحقق منها.": "The extracted or entered reference is saved; this system did not issue or verify the document.",
  "جارٍ قراءة مستند النقل واستخراج المرجع...": "Reading the transport document and extracting its reference...",
  "تم استخراج رقم الوثيقة وتاريخها من PDF. راجعهما قبل الحفظ.": "The document number and date were extracted from the PDF. Review them before saving.",
  "تم استخراج جزء من مرجع الوثيقة. أكمل الخانة الناقصة يدوياً.": "Part of the document reference was extracted. Fill in the missing field manually.",
  "لم يتم العثور على رقم الوثيقة أو تاريخها في ملفات PDF. أدخلهما يدوياً.": "No document number or date was found in the PDFs. Enter them manually.",
  "انتظر انتهاء قراءة PDF قبل حفظ الرحلة.": "Wait for the PDF to finish processing before saving the trip.",
  "حفظ الرحلة": "Save Trip",
  "قبل حفظ الرحلة": "Before Saving the Trip",
  "تأكد من أن حالة الفسح المدخلة «مفسوح».": "Make sure the manually entered clearance status is “Cleared”.",
  "إدخال رقم الوثيقة يدوي ولا يثبت صحته؛ لا يتم حالياً إصدار أو تنزيل PDF حكومي من النظام.": "Entering a document number manually does not verify it; government documents cannot currently be issued or downloaded here.",
  "مدخل يدوياً": "Manually Entered",
  "بيانات وثيقة مدخلة يدوياً": "Document details entered manually",
  "تم حفظ بيانات الفسح اليدوية. لم يتم التحقق منها لدى منصة فسح.": "Manual clearance details saved. They were not verified with Fasah.",
  "تم حفظ الرحلة ومرجع وثيقة النقل؛ لم يصدر النظام الوثيقة.": "Trip and transport document reference saved; this system did not issue the document.",
  "تم إنشاء طلب الرحلة بدون رقم وثيقة.": "Trip request created without a document number.",
  "رقم البيان أو الحاوية مسجل مسبقاً.": "This declaration or container is already registered.",
  "بيانات الحاوية المسجلة لا تطابق المقاس أو النوع المدخل.": "The registered container size or type does not match the entered details.",
  "أدخل تاريخ الفسح للحاوية المفسوحة.": "Enter the clearance date for a cleared container.",
  "أدخل رقم الوثيقة وتاريخها معاً أو اتركهما فارغين.": "Enter both the document number and date, or leave both blank.",
  "هذه الوثيقة مسجلة يدوياً ولا توجد لها نسخة PDF مرفقة.": "This document was entered manually and has no attached PDF.",
  "تحقق من الملفات المرفقة وصيغها.": "Check the attached files and their formats.",
  "حجم الملف الواحد لا يتجاوز 5 MB وإجمالي الملفات لا يتجاوز 8 MB.": "Each file must be 5 MB or smaller, and all files must total 8 MB or less.",
  "لا تملك صلاحية تنزيل هذا المرفق.": "You are not allowed to download this attachment.",
  "حجم الطلب أكبر من الحد المسموح. قلّل حجم المرفقات.": "The request exceeds the maximum size. Reduce the attachment size.",
  "تعذر قراءة بيانات الطلب.": "The request data could not be read.",
  "مستندات الفسح (PDF أو JPG أو PNG)": "Clearance Documents (PDF, JPG, or PNG)",
  "مستندات وثيقة النقل (PDF أو JPG أو PNG)": "Transport Document Files (PDF, JPG, or PNG)",
  "حتى 4 ملفات، بإجمالي 8 MB (الملف الواحد حتى 5 MB).": "Up to 4 files, 8 MB total (up to 5 MB per file).",
  "المرفقات المحفوظة": "Saved Attachments",
  "مرفقات الفسح": "Clearance attachments",
  "مرفقات وثيقة النقل": "Transport document attachments",
  "تنزيل": "Download",
  "اختر 4 ملفات كحد أقصى.": "Choose no more than 4 files.",
  "حجم الملف الواحد لا يتجاوز 5 MB.": "Each file must be 5 MB or smaller.",
  "إجمالي المرفقات لا يتجاوز 8 MB.": "Attachments must total 8 MB or less.",
  "ارفع ملفات PDF أو JPG أو PNG فقط.": "Upload PDF, JPG, or PNG files only.",
  "خدمات المنصات": "Platform Services",
  "ابحث عن بيانات الحاوية والبيان الجمركي — بيانات تجريبية.": "Search container and customs declaration details — demo data.",
  "خدمة محاكاة فسح": "Fasah simulation service",
  "أدخل رقم البيان الجمركي أو رقم الحاوية": "Enter a customs declaration or container number",
  "بحث عن البيان": "Search Declaration",
  "جرّب:": "Try:",
  "لم يتم العثور على نتائج": "No results found",
  "تحقق من الرقم أو جرّب أحد أرقام البيانات التجريبية.": "Check the number or try one of the demo declaration numbers.",
  "بيان جمركي:": "Customs Declaration:",
  "حاوية": "Container",
  "رقم الحاوية": "Container Number",
  "المقاس والنوع": "Size & Type",
  "رقم الرصاص الملاحي": "Shipping Seal Number",
  "اسم الباخرة": "Vessel Name",
  "تاريخ الفسح": "Clearance Date",
  "تم إصدار وثيقة لهذا البيان": "A document has already been issued for this declaration",
  "تحويل لإصدار وثيقة بيان": "Continue to Bayan Document",
  "بيان ونقل": "Bayan & Naql",
  "أكمل بيانات الرحلة لإصدار الوثيقة وحفظها في الأرشيف.": "Complete the trip details to issue the document and save it to the archive.",
  "وضع الإصدار التجريبي": "Demo issuance mode",
  "بيانات الفسح والحاوية": "Clearance & Container Details",
  "اختر بياناً مفسوحاً لربطه بالرحلة": "Select a cleared declaration to link to the trip",
  "البيان الجمركي": "Customs Declaration",
  "اختر بياناً مفسوحاً": "Select a cleared declaration",
  "تفاصيل الرحلة": "Trip Details",
  "بيانات السائق والعميل والتسليم": "Driver, customer, and delivery details",
  "الشاحنة": "Truck",
  "السائق": "Driver",
  "الشركة المستلمة": "Receiving Company",
  "مثال: شركة العميل": "Example: Customer Company",
  "وجهة التسليم": "Delivery Destination",
  "المدينة أو المستودع": "City or warehouse",
  "موعد إعادة الحاوية الفارغة": "Empty Container Return Due",
  "سيصدر رقم وثيقة رسمي فقط بعد نجاح طلب منصة بيان.": "An official document number is shown only after a successful response from Bayan.",
  "إصدار وثيقة بيان": "Issue Bayan Document",
  "قبل إصدار الوثيقة": "Before Issuing the Document",
  "تأكد من أن حالة الفسح «مفسوح».": "Make sure the clearance status is “Cleared”.",
  "اختر شاحنة متاحة وسائقاً نشطاً.": "Select an available truck and an active driver.",
  "أدخل بيانات العميل ووجهة التسليم بدقة.": "Enter the customer and delivery details accurately.",
  "تنويه": "Notice",
  "هذا نموذج تجريبي. لا يتم إرسال بيانات إلى منصة بيان أو نقل.": "This is a demo form. No data is sent to Bayan or Naql.",
  "إدارة الموارد": "Resource Management",
  "إدارة بيانات الشاحنات والسائقين المسجلة في المتصفح.": "Manage truck and driver records stored in this browser.",
  "إضافة شاحنة": "Add Truck",
  "رقم الأسطول": "Fleet Number",
  "تحديد السيارة ": "Select truck ",
  "تحديد السائق ": "Select driver ",
  "السائق المعيّن للسيارة ": "Driver assigned to truck ",
  "حالة ": "Status ",
  "حذف السيارة ": "Delete truck ",
  "حذف السائق ": "Delete driver ",
  "تعديل السيارة ": "Edit truck ",
  "تعديل السائق ": "Edit driver ",
  "رقم السيارة (حروف وأرقام)": "Vehicle Plate (Letters & Numbers)",
  "الرقم التسلسلي": "Serial Number",
  "رقم الهيكل": "Chassis Number",
  "الموديل": "Model",
  "سنة الصنع / الطراز": "Year / Model",
  "اسم السائق": "Driver Name",
  "حفظ الشاحنة": "Save Truck",
  "السيارات والسائقون": "Trucks & Drivers",
  "سيارة — رقم اللوحة والسائق والحالة": "trucks — plate, driver, and status",
  "تم تحديد": "Selected",
  "حذف المحدد": "Delete Selected",
  "إلغاء التحديد": "Clear Selection",
  "ابحث عن سيارة أو سائق": "Search trucks or drivers",
  "تحديد السيارات الظاهرة": "Select visible trucks",
  "إضافة سائق": "Add Driver",
  "قائمة السائقين المسجلين وحالة نشاطهم.": "Registered drivers and their activity status.",
  "رقم الهوية / الإقامة": "National ID / Residency",
  "رقم الهوية": "ID Number",
  "رقم الجوال": "Mobile Number",
  "رقم جواز السفر": "Passport Number",
  "05xxxxxxxx": "05xxxxxxxx",
  "حفظ السائق": "Save Driver",
  "سائقاً مسجلاً": "registered drivers",
  "تحديد السائقين الظاهرين": "Select visible drivers",
  "الاسم": "Name",
  "الجوال": "Mobile",
  "جواز السفر": "Passport",
  "غير معيّن": "Unassigned",
  "غير نشط": "Inactive",
  "غير نشطة": "Inactive",
  "متاحة": "Available",
  "في رحلة": "On Trip",
  "صيانة": "Maintenance",
  "معلّق": "On Hold",
  "مرفوض": "Rejected",
  "قيد الإجراء": "Pending",
  "مفسوح": "Cleared",
  "لا توجد سيارات مطابقة.": "No matching trucks.",
  "لا يوجد سائقون مطابقون.": "No matching drivers.",
  "المستندات": "Documents",
  "ابحث برقم البيان أو الحاوية أو الوثيقة أو لوحة الشاحنة.": "Search by declaration, container, document, or truck plate number.",
  "ابحث في الأرشيف...": "Search the archive...",
  "تظهر نتائج الوثائق المحفوظة محلياً على هذا الجهاز.": "Documents saved locally on this device appear here.",
  "لا توجد وثائق مطابقة": "No matching documents",
  "الأرشيف فارغ": "The archive is empty",
  "جرّب البحث برقم مختلف.": "Try a different search term.",
  "ستظهر الوثائق هنا بعد إصدارها.": "Documents will appear here after they are issued.",
  "تاريخ الإصدار:": "Issue Date:",
  "وثيقة صادرة": "Issued Document",
  "اللوحة:": "Plate:",
  "العميل:": "Customer:",
  "السائق:": "Driver:",
  "عرض / PDF": "View / PDF",
  "تسجيل الإعادة": "Record Return",
  "تحليل العمليات": "Operations Analysis",
  "تصفية تفاصيل الفسح ووثائق النقل وعودة الحاويات الفارغة.": "Filter clearance details, transport documents, and empty-container returns.",
  "تصدير إلى Excel": "Export to Excel",
  "من تاريخ": "From Date",
  "إلى تاريخ": "To Date",
  "كل الموانئ": "All Ports",
  "الشركة": "Company",
  "اسم الشركة": "Company Name",
  "حالة عودة الفارغ": "Empty Return Status",
  "كل الحالات": "All Statuses",
  "تمت الإعادة": "Returned",
  "تقترب المهلة": "Due Soon",
  "متأخرة": "Overdue",
  "ضمن المهلة": "Within Free Time",
  "مسح الفلاتر": "Clear Filters",
  "سجل العمليات": "Operations Log",
  "تُحدّث النتائج تلقائياً حسب الفلاتر": "Results update automatically based on filters",
  "تاريخ العملية / الفسح": "Operation / Clearance Date",
  "السائق وبياناته": "Driver Details",
  "وثيقة بيان": "Bayan Document",
  "الحاوية والتفاصيل": "Container Details",
  "المسار": "Route",
  "عودة الفارغ / EIR": "Empty Return / EIR",
  "لا توجد نتائج مطابقة": "No matching results",
  "جرّب تغيير الفلاتر أو مسحها.": "Try changing or clearing the filters.",
  "إدارة الصلاحيات": "Access Management",
  "إنشاء حسابات الأدمن والسائقين وإدارة تسجيل الدخول.": "Create administrator and driver accounts and manage sign-in.",
  "إضافة حساب": "Add Account",
  "تعديل حساب": "Edit Account",
  "كلمات المرور تحفظ كتجزئة ولا تظهر في الجدول.": "Passwords are stored as hashes and are not shown in the table.",
  "نوع الحساب": "Account Type",
  "ربط بسجل السائق": "Link to Driver Record",
  "كلمة مرور جديدة (اختياري)": "New Password (Optional)",
  "تأكيد كلمة المرور الجديدة": "Confirm New Password",
  "اتركها فارغة للإبقاء على الحالية": "Leave blank to keep the current password",
  "أعد كتابة كلمة المرور الجديدة": "Re-enter the new password",
  "إنشاء الحساب": "Create Account",
  "حفظ التعديلات": "Save Changes",
  "إلغاء التعديل": "Cancel Editing",
  "استخدم كلمة مرور مختلفة لكل مستخدم. حسابات هذه النسخة محلية على هذا المتصفح.": "Use a different password for each user. Accounts in this version are stored in this browser.",
  "الحسابات المسجلة": "Registered Accounts",
  "حساب": "account",
  "أدمن": "Administrator",
  "السائق المرتبط": "Linked Driver",
  "تاريخ الإنشاء": "Created",
  "لا توجد حسابات مستخدمين.": "No user accounts.",
  "تعديل": "Edit",
  "واجهة تجريبية تعمل محلياً على جهازك": "Demo interface running locally on your device",
  "بوابة السائق": "Driver Portal",
  "مساحة السائق": "Driver Workspace",
  "رحلاتي": "My Trips",
  "الرحلات والوثائق المرتبطة بحسابك فقط.": "Only trips and documents linked to your account.",
  "حساب سائق": "Driver Account",
  "إجمالي الرحلات": "Total Trips",
  "الوثائق المرتبطة بحسابك": "Documents linked to your account",
  "رحلات قيد التنفيذ": "Active Trips",
  "بانتظار إعادة الحاوية": "Awaiting container return",
  "رحلات مكتملة": "Completed Trips",
  "تم تسجيل عودة الفارغ": "Empty container return recorded",
  "الرحلات والوثائق": "Trips & Documents",
  "تواصل مع الإدارة عند وجود اختلاف في بيانات الرحلة.": "Contact the administration if any trip details are incorrect.",
  "الميناء والوجهة": "Port & Destination",
  "موعد إعادة الفارغ": "Empty Return Due",
  "هذه واجهة تجريبية محلية، ولا ترسل تحديثات إلى منصة حكومية أو خادم مركزي.": "This is a local demo interface; it does not send updates to a government platform or central server.",
  "لا توجد رحلات مرتبطة بحسابك حالياً.": "No trips are currently linked to your account.",
  "مكتملة": "Completed",
  "من:": "From:",
  "إلى:": "To:",
  "العملية:": "Operation:",
  "الفسح:": "Clearance:",
  "إيصال EIR:": "EIR Receipt:",
  "المهلة المجانية:": "Free Time Ends:",
  "رقم الأسطول:": "Fleet No.:",
  "الرصاص:": "Seal:",
  "البيان:": "Declaration:",
  "رقم وثيقة بيان": "Bayan Document Number",
  "حالة الوثيقة": "Document Status",
  "رقم لوحة الشاحنة": "Truck Plate Number",
  "المقاس": "Size",
  "النوع": "Type",
  "رقم البيان الجمركي": "Customs Declaration Number",
  "من - الميناء": "From - Port",
  "إلى - الوجهة": "To - Destination",
  "تاريخ الاستحقاق لإعادة الفارغ": "Empty Return Due Date",
  "تاريخ إعادة الفارغ الفعلي": "Actual Empty Return Date",
  "رقم إيصال EIR": "EIR Receipt Number",
  "نهاية فترة السماح المجانية": "Free Time Expiration",
  "تقرير العمليات": "Operations Report",
  "تاريخ العملية": "Operation Date",
  "وثيقة نقل حاوية": "Container Transport Document",
  "نسخة تجريبية — غير صادرة من منصة حكومية": "Demo copy — not issued by a government platform",
  "بيانات الوثيقة والبيان الجمركي": "Document & Customs Declaration Details",
  "تاريخ الإصدار": "Issue Date",
  "بيانات الرحلة": "Trip Details",
  "الشاحنة / رقم الأسطول": "Truck / Fleet Number",
  "وثيقة للعرض والطباعة فقط. تم إنشاؤها من نموذج محلي ولا تمثل وثيقة رسمية أو تكاملاً فعلياً مع منصة بيان.": "For viewing and printing only. Generated locally; this is not an official document or a live integration with Bayan.",
  "تاريخ الطباعة:": "Print Date:",
  "تقرير-النقل-": "transport-report-",
  "مقاس والنوع": "Size & Type",
  "20 قدم": "20 ft",
  "40 قدم": "40 ft",
  "جافة": "Dry",
  "مبردة": "Refrigerated",
  "سقف مفتوح": "Open Top",
  "مسطحة": "Flat Rack",
  "صهريج": "Tank",
  "أخرى": "Other",
  "ميناء جدة الإسلامي": "Jeddah Islamic Port",
  "ميناء الملك عبدالعزيز بالدمام": "King Abdulaziz Port, Dammam",
  "ميناء الجبيل التجاري": "Jubail Commercial Port",
  "ميناء ينبع التجاري": "Yanbu Commercial Port",
  "الرياض إكسبريس": "Riyadh Express",
  "جدة ستار": "Jeddah Star",
  "الخليج الأزرق": "Blue Gulf",
  "ينبع مارين": "Yanbu Marine",
  "الملك فهد": "King Fahd",
  "جدة إكسبريس": "Jeddah Express",
  "شركة آفاق للتجارة": "Afaq Trading Company",
  "مؤسسة مدار الإمداد": "Madar Supply Establishment",
  "شركة روافد الصناعة": "Rawafid Industrial Company",
  "مستودع الرياض — السلي": "Riyadh Warehouse — Al Sulay",
  "مستودع الدمام — الصناعية الثانية": "Dammam Warehouse — 2nd Industrial City",
  "مستودع الجبيل": "Jubail Warehouse",
  "سائق تجريبي": "Demo Driver",
  "هوية تجريبية": "Demo ID",
  "جواز تجريبي": "Demo Passport",
  "تأخرت": "Overdue",
  "تمت الإعادة ": "Returned ",
  "متأخرة · الاستحقاق": "Overdue · Due",
  "تقترب المهلة ·": "Due soon ·",
  "ضمن المهلة ·": "Within free time ·",
  "تعذر العثور على نتائج": "No results found",
  "غير معروفة": "Unknown",
  "يوجد إصدار سابق لهذا البيان.": "A document was previously issued for this declaration.",
  " · صدر": " · Issued",
  "(غير نشط)": "(Inactive)",
  "تم تحديد ": "Selected ",
  " سيارة — رقم اللوحة والسائق والحالة": " trucks — plate, driver, and status",
  " · ": " · ",
  "اسم المستخدم يجب أن يتكون من ٣ أحرف على الأقل.": "Username must be at least 3 characters.",
  "اسم المستخدم مستخدم بالفعل.": "This username is already in use.",
  "كلمة المرور يجب ألا تقل عن ١٢ حرفاً.": "Password must be at least 12 characters.",
  "كلمتا المرور غير متطابقتين.": "Passwords do not match.",
  "اسم المستخدم أو كلمة المرور غير صحيحة.": "Incorrect username or password.",
  "حساب السائق غير نشط. يرجى التواصل مع الإدارة.": "This driver account is inactive. Please contact the administration.",
  "تعذر التحقق من كلمة المرور في هذا المتصفح.": "Could not verify the password in this browser.",
  "تعذر إنشاء الحساب في هذا المتصفح. افتح التطبيق عبر HTTPS أو localhost ثم أعد المحاولة.": "Could not create the account in this browser. Open the app over HTTPS or localhost and try again.",
  "تعذر حفظ البيانات محلياً. قد يكون التخزين غير متاح في هذا المتصفح.": "Could not save data locally. Storage may be unavailable in this browser.",
  "تعذر إنشاء الحساب في هذا المتصفح.": "Could not create the account in this browser.",
  "تعذر العثور على الحساب المطلوب.": "The requested account could not be found.",
  "لم يعد الحساب المحدد متاحاً للتعديل.": "The selected account is no longer available for editing.",
  "اختر سجلاً نشطاً لسائق لا يملك حساباً بعد.": "Select an active driver record that does not already have an account.",
  "لدى هذا السائق حساب مستخدم بالفعل.": "This driver already has a user account.",
  "لا يمكن تغيير نوع حساب آخر أدمن في النظام.": "The last administrator account cannot be changed to a driver account.",
  "تم حفظ تعديلات الحساب.": "Account changes saved.",
  "تم إنشاء الحساب. شارك اسم المستخدم وكلمة المرور مع صاحبه بشكل آمن.": "Account created. Share the username and password securely with its owner.",
  "لا يمكن حذف السيارة لوجود رحلة لم تُسجّل عودتها بعد.": "This truck cannot be deleted because it has an unreturned trip.",
  "لا يمكن حذف السائق لارتباطه برحلة لم تُسجّل عودتها بعد.": "This driver cannot be deleted because they have an unreturned trip.",
  "هل تريد حذف السيارة ": "Delete truck ",
  "؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.": "? Previous documents will remain in the archive.",
  "هل تريد حذف السائق ": "Delete driver ",
  "؟ ستبقى بياناته ظاهرة في وثائقه السابقة.": "? Their details will remain on previous documents.",
  "تم حذف السيارة من قائمة الأسطول مع الاحتفاظ بوثائقها السابقة.": "Truck removed from the fleet; previous documents were retained.",
  "تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.": "Driver removed from the list; previous records were retained.",
  "لم تُحذف السيارات المحددة؛ لا توجد سيارة آمنة للحذف ضمن الاختيار.": "No selected trucks were deleted; none were safe to delete.",
  "لم يُحذف السائقون المحددون؛ لا يوجد سائق آمن للحذف ضمن الاختيار.": "No selected drivers were deleted; none were safe to delete.",
  " وسيتم تخطي ": " Skipping ",
  " سيارة مرتبطة برحلة لم تُعد.": " truck(s) with unreturned trips.",
  " سائق مرتبط برحلة لم تُعد.": " driver(s) with unreturned trips.",
  "تأكيد حذف ": "Confirm deletion of ",
  " سيارة؟ ستبقى الوثائق السابقة في الأرشيف.": " truck(s)? Previous documents will remain in the archive.",
  " سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.": " driver(s)? Previous records will remain in the archive.",
  "تم حذف ": "Deleted ",
  " سيارة.": " truck(s).",
  " سائق.": " driver(s).",
  " تم الإبقاء على ": " Kept ",
  " لارتباطها برحلات نشطة.": " due to active trips.",
  " سائق لارتباطه برحلات نشطة.": " driver(s) due to active trips.",
  "تم تسجيل عودة الحاوية وتحديث حالة الشاحنة.": "Container return recorded and truck status updated.",
  "أدخل رقم إيصال التسليم EIR (اختياري):": "Enter the EIR delivery receipt number (optional):",
  "تعذر العثور على الوثيقة.": "Document not found.",
  "اسمح بالنوافذ المنبثقة لعرض نسخة الطباعة.": "Allow pop-ups to view the print copy.",
  "تعذر تحميل مكتبة Excel. تحقق من اتصال الإنترنت ثم أعد المحاولة.": "Could not load the Excel library. Check your internet connection and try again.",
  "تم تصدير ": "Exported ",
  " عملية إلى Excel.": " operation(s) to Excel.",
  "تم إنشاء وثيقة العرض ": "Demo document ",
  " وحفظها محلياً.": " created and saved locally.",
  "اختر بياناً جمركياً مفسوحاً أولاً.": "Select a cleared customs declaration first.",
  "سبق إصدار وثيقة لهذا البيان.": "A document has already been issued for this declaration.",
  "اختر شاحنة متاحة.": "Select an available truck.",
  "اختر سائقاً نشطاً.": "Select an active driver.",
  "أكمل اسم الشركة ووجهة التسليم.": "Enter the company name and delivery destination.",
  "تعذر العثور على السائق المحدد.": "The selected driver could not be found.",
  "تم تحديث حالة السيارة.": "Truck status updated.",
  "تم تحديث السائق المعيّن للسيارة.": "Assigned driver updated.",
  "أقسام السائق": "Driver Sections",
  "الطلبات": "Requests",
  "طلبات جديدة": "New Requests",
  "قبول الطلب": "Accept Request",
  "قبول الرحلة": "Accept Trip",
  "معلومات الطلب": "Request Details",
  "طلب جديد من الإدارة": "New request from the administration",
  "طلب جديد": "New Request",
  "لا يوجد حساب": "No account",
  "بانتظار قبولك": "Awaiting your acceptance",
  "بانتظار قبول السائق": "Awaiting Driver Acceptance",
  "بانتظار القبول": "Awaiting Acceptance",
  "لا توجد طلبات جديدة حالياً.": "There are no new requests right now.",
  "ستظهر هنا الرحلات التي يعيّنها لك مدير النظام.": "Trips assigned to you by the administrator will appear here.",
  "بعد قبول الطلب ستظهر مراحل الرحلة هنا.": "The trip stages will appear here after you accept the request.",
  "راجع تفاصيل الرحلة قبل القبول.": "Review the trip details before accepting.",
  "قبول الرحلة وبدء التتبع": "Accept Trip and Start Tracking",
  "تم قبول الرحلة. ابدأ التوجه إلى الميناء.": "Trip accepted. Start heading to the port.",
  "أنشئ حساباً للسائق المحدد قبل تعيين رحلة له.": "Create an account for the selected driver before assigning a trip.",
  "تم تحديث مرحلة الرحلة.": "Trip stage updated.",
  "لا يمكن تحديث مرحلة هذه الرحلة.": "This trip stage cannot be updated.",
  "لا يمكن قبول هذا الطلب.": "This request cannot be accepted.",
  "تأكيد المرحلة التالية": "Confirm Next Stage",
  "تاريخ الرحلة": "Trip Date",
  "الحاوية والمقاس": "Container & Size",
  "الميناء ووجهة التسليم": "Port & Delivery Destination",
  "موعد إعادة الحاوية": "Container Return Due",
  "طلب الرحلة": "Trip Request",
  "وثيقة الرحلة": "Trip Document",
  "في الطريق إلى الميناء": "En Route to Port",
  "تم استلام الحاوية": "Container Picked Up",
  "في الطريق للعميل": "En Route to Customer",
  "تم الوصول إلى العميل": "Arrived at Customer",
  "تم التسليم": "Delivered",
  "في الطريق للعودة": "Returning",
  "تم إعادة الفارغ": "Empty Container Returned",
  "تأكيد استلام الحاوية": "Confirm Container Pickup",
  "تأكيد الانطلاق إلى العميل": "Confirm Departure to Customer",
  "تأكيد الوصول إلى العميل": "Confirm Arrival at Customer",
  "تأكيد تسليم الحاوية": "Confirm Container Delivery",
  "تأكيد بدء العودة": "Confirm Return Journey",
  "تأكيد إعادة الفارغ": "Confirm Empty Container Return",
  "رقم إيصال التسليم EIR (اختياري)": "EIR Delivery Receipt Number (Optional)",
  "الرحلة مكتملة": "Trip Completed",
  "قيد التنفيذ": "In Progress",
  "السائق لم يقبل الطلب بعد": "The driver has not accepted the request yet",
  "مقبولة": "Accepted",
  "الخطوة": "Step",
  "من أصل": "of",
  "تم تسجيل إعادة الفارغ وإكمال الرحلة.": "Empty container return recorded; trip completed.",
  "تعذر حفظ مرحلة الرحلة.": "Could not save the trip stage.",
  "تم قبول طلب الرحلة.": "Trip request accepted.",
  "لا يمكن قبول طلب غير مخصص لحسابك.": "You cannot accept a request that is not assigned to your account.",
  "لا يمكن تغيير حالة شاحنة مرتبطة بطلب بانتظار قبول السائق.": "A truck assigned to a pending driver request cannot have its status changed.",
  "لا يمكن تغيير سائق الشاحنة قبل قبول الطلب أو إلغائه.": "The truck's driver cannot be changed while its request is pending.",
  "لا توجد وثائق نقل بعد.": "There are no transport documents yet.",
  "الرحلة": "Trip",
  "موعد التسليم": "Delivery Due",
  "عميل": "Customer",
  "وجهة العميل": "Customer Destination",
  "قبول الطلب وبدء الرحلة": "Accept Request and Start Trip",
  "تابع مراحل الرحلة وسجّل كل تحديث عند حدوثه.": "Track the trip stages and record each update as it happens.",
  "المرحلة الحالية": "Current Stage",
  "الخطوات المتبقية": "Remaining Steps",
  "تم": "Done",
  "نشطة": "Active",
  "طلب": "request",
  "طلبات": "requests",
  "رحلة": "trip",
  "رحلات": "trips",
  "السائقون": "Drivers",
  "سائق": "Driver",
  "اختر": "Select",
  "أو": "or",
  "عملية": "operation",
  "عمليات": "operations",
  "اختر سائقاً نشطاً للسيارة.": "Select an active driver for this truck.",
  "رقم الأسطول أو اللوحة أو الرقم التسلسلي مسجل مسبقاً.": "Fleet number, plate, or serial number is already registered.",
  "بيانات الشاحنة مسجلة مسبقاً.": "Truck details are already registered.",
  "تمت إضافة الشاحنة.": "Truck added.",
  "رقم الهوية أو جواز السفر مسجل مسبقاً.": "ID or passport number is already registered.",
  "بيانات السائق مسجلة مسبقاً.": "Driver details are already registered.",
  "تمت إضافة السائق.": "Driver added.",
  "تم تحديث بيانات الشاحنة.": "Truck details updated.",
  "تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.": "The truck was permanently deleted from the database; its previous documents and reports remain available.",
  " نهائياً من قاعدة البيانات؟ ستبقى رحلاتها ووثائقها السابقة محفوظة في الأرشيف.": " permanently from the database? Its trips and previous documents will remain in the archive.",
  " سيارة نهائياً من قاعدة البيانات؟ ستبقى رحلاتها ووثائقها السابقة محفوظة في الأرشيف.": " truck(s) permanently from the database? Their trips and previous documents will remain in the archive.",
  "تم تحديث بيانات السائق.": "Driver details updated.",
  "يتطلب النظام اتصالاً بخادم الشركة. لا تُحفظ بيانات العمل على هذا الجهاز.": "A connection to the company server is required. Business data is not stored on this device.",
  "بيانات مركزية آمنة": "Secure central data",
  "تُحفظ العمليات على خادم الشركة.": "Operations are stored on the company server.",
  "حالة الخدمات الحكومية من الخادم": "Government service status from the server",
  "غير مربوط": "Not connected",
  "تعذر التحقق": "Could not verify",
  "لن تُعرض الخدمة على أنها متصلة حتى ينجح فحص الاتصال الرسمي.": "A service will not be marked connected until its official connection test succeeds.",
  "يتم الاستعلام من خلال خدمة فسح المعتمدة فقط.": "Clearance lookups are performed only through the approved Fasah service.",
  "اتصال رسمي": "Official connection",
  "لا تُستخدم بيانات محاكاة عند تعذر الوصول إلى المنصة.": "Mock data is never used when the platform is unavailable.",
  "أنشئ طلب رحلة للسائق بعد التحقق من بيانات الفسح.": "Create a driver trip request after validating clearance details.",
  "سيصدر رقم وثيقة رسمي فقط بعد نجاح طلب منصة بيان.": "An official document number is shown only after a successful response from Bayan.",
  "إنشاء طلب الرحلة لا يعني صدور وثيقة حكومية. يظهر رقم بيان بعد استلام تأكيد المنصة فقط.": "Creating a trip request does not issue a government document. A Bayan number appears only after platform confirmation.",
  "تم إنشاء طلب الرحلة. وثيقة النقل الرسمية غير صادرة حتى يكتمل الربط المعتمد.": "The trip request was created. No official transport document has been issued because the approved integration is not configured.",
  "مسودة داخلية — غير صادرة": "Internal draft — not issued",
  "تعذر الإصدار الرسمي": "Official issuance failed",
  "ملخص رحلة داخلي": "Internal Trip Summary",
  "مسودة رحلة": "Trip Draft",
  "مسودة": "Draft",
  "مسودة داخلية — غير صادرة من منصة حكومية": "Internal draft — not issued by a government platform",
  "ملخص داخلي للرحلة فقط، ولا يُعد تصريحاً أو وثيقة صادرة من منصة حكومية.": "Internal trip summary only; it is not a permit or a document issued by a government platform.",
  "وثيقة نقل مرتبطة ببيانات الإصدار المستلمة من المنصة.": "Transport document based on issuance data received from the platform.",
  "تظهر الوثائق وطلبات الرحلات المحفوظة في قاعدة بيانات الشركة.": "Documents and trip requests stored in the company database appear here.",
  "استخدم كلمة مرور مختلفة لكل مستخدم. تُخزّن كلمات المرور مجزأة على الخادم.": "Use a different password for each user. Passwords are hashed on the server.",
  "تشغيل مركزي عبر خادم الشركة": "Central operation through the company server",
  "إنشاء طلب الرحلة": "Create Trip Request",
  "إصدار رسمي": "Official issuance",
  "لم يصدر بعد": "Not issued yet",
  "سجّل الدخول للمتابعة إلى الواجهة المناسبة لحسابك.": "Sign in to continue to the workspace for your account.",
  "تُحفظ تحديثات الرحلة على خادم الشركة. لا تمثل هذه التحديثات إصداراً حكومياً.": "Trip updates are saved to the company server. They do not constitute government document issuance.",
  "تعذر الاتصال بالخادم. تحقق من اتصال الشبكة ثم أعد المحاولة.": "Could not connect to the server. Check the network connection and try again.",
  "تم تحديث الحساب. سجّل الدخول مجدداً.": "Account updated. Please sign in again.",
  "تم تصدير التقرير من الخادم.": "Report exported from the server.",
  "لم يتم إنشاء بيانات بديلة أو نتائج محاكاة.": "No substitute or simulated data was generated.",
  "جارٍ الاتصال بخدمة فسح المعتمدة…": "Contacting the approved Fasah service…",
  "تحقق من الرقم أو تأكد من صلاحية الوصول في منصة فسح.": "Check the number or verify your access to Fasah.",
  "كلمة المرور يجب ألا تقل عن ١٢ حرفاً.": "Password must be at least 12 characters.",
  "انتهت الجلسة. سجّل الدخول مجدداً.": "Your session expired. Please sign in again.",
  "الربط الرسمي غير مهيأ حالياً. لم تُستخدم بيانات محاكاة.": "The official integration is not configured. No mock data was used.",
  "لا يمكن تعديل الشاحنة أو حذفها لارتباطها برحلة نشطة.": "This truck cannot be changed or deleted because it has an active trip.",
  "لا يمكن حذف السائق لارتباطه برحلة نشطة.": "This driver cannot be deleted because they have an active trip.",
  "السائق غير متاح أو لديه حساب بالفعل.": "This driver is unavailable or already has an account.",
  "البيان غير متاح أو سبق استخدامه في رحلة.": "This clearance is unavailable or already assigned to a trip.",
  "الشاحنة غير متاحة.": "This truck is unavailable.",
  "طلب الرحلة غير متاح لهذا الحساب.": "This trip request is unavailable to this account.",
  "تم تسجيل عودة الحاوية مسبقاً.": "The container return has already been recorded.",
  "لا يمكن تغيير نوع حساب آخر مدير في النظام.": "The last administrator account cannot be changed.",
  "تم رفض الطلب بسبب مصدر غير موثوق.": "The request was rejected because its origin is not trusted.",
  "تاريخ الطباعة: ": "Print Date: ",
  "الإصدار": "Issuance",
  "الحالة غير معروفة": "Unknown status"
});
const TRANSLATION_ENTRIES = Object.entries(TRANSLATIONS).sort((a, b) => b[0].length - a[0].length);
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let language = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "ar";
const TRUCK_STATUSES = {
  AVAILABLE: { label: "متاحة", className: "status-available" },
  ASSIGNED: { label: "طلب جديد", className: "status-pending" },
  ON_TRIP: { label: "في رحلة", className: "status-on-trip" },
  MAINTENANCE: { label: "صيانة", className: "status-maintenance" },
  INACTIVE: { label: "غير نشطة", className: "status-neutral" }
};
const TRIP_STAGES = [
  { key: "EN_ROUTE_TO_PORT", label: "في الطريق إلى الميناء", action: "تأكيد استلام الحاوية" },
  { key: "CONTAINER_PICKED_UP", label: "تم استلام الحاوية", action: "تأكيد الانطلاق إلى العميل" },
  { key: "EN_ROUTE_TO_CUSTOMER", label: "في الطريق للعميل", action: "تأكيد الوصول إلى العميل" },
  { key: "ARRIVED_AT_CUSTOMER", label: "تم الوصول إلى العميل", action: "تأكيد تسليم الحاوية" },
  { key: "DELIVERED", label: "تم التسليم", action: "تأكيد بدء العودة" },
  { key: "RETURNING_EMPTY", label: "في الطريق للعودة", action: "تأكيد إعادة الفارغ" },
  { key: "EMPTY_RETURNED", label: "تم إعادة الفارغ", action: "" }
];
const CONTAINER_TYPES = {
  DRY: "جافة",
  REFRIGERATED: "مبردة",
  OPEN_TOP: "سقف مفتوح",
  FLAT_RACK: "مسطحة",
  TANK: "صهريج",
  OTHER: "أخرى"
};
const CLEARANCE_LABELS = {
  CLEARED: { text: "مفسوح", className: "status-issued" },
  PENDING: { text: "قيد الإجراء", className: "status-pending" },
  ON_HOLD: { text: "معلّق", className: "status-maintenance" },
  REJECTED: { text: "مرفوض", className: "status-maintenance" }
};
const EXPENSE_TYPE_LABELS = {
  FUEL: "بنزين",
  MAINTENANCE: "صيانة"
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function dateOnly(date = new Date()) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return dateOnly(date);
}

let state = {
  trucks: [],
  drivers: [],
  clearances: [],
  docs: [],
  accounts: [],
  ports: [],
  tripExpenses: [],
  fasahAppointments: [],
  tariffs: [],
  invoices: [],
  customers: []
};
let editingTariffId = null;
let currentPrintableInvoiceId = null;
let latestFasahPdfExtraction = null;
let toastTimer;
let currentAccount = null;
let fasahSearchSequence = 0;
let pendingFasahAppointmentId = null;
let editingFasahAppointmentId = null;
let editingDomesticTripId = null;
let editingTripExpenseId = null;
let editingAccountId = null;
let editingTruckId = null;
let editingDriverId = null;
let activeDriverTab = "requests";
let trackingLastUpdatedAt = null;
let trackingRefreshInFlight = false;
let editingClearanceId = null;
let issueDriverMatchSequence = 0;
let autoMatchedIssueSelection = null;
let transportReferenceExtractionSequence = 0;
let transportReferenceExtractionInFlight = false;
const selectedTruckIds = new Set();
const selectedArchiveTripIds = new Set();
const selectedDriverIds = new Set();

function translateText(value) {
  let result = String(value ?? "");
  if (language !== "en") return result;
  for (const [arabic, english] of TRANSLATION_ENTRIES) result = result.replaceAll(arabic, english);
  return result;
}

function localizeDocument() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = translateText("عَالَمُ الشَّمَالِ | إدارة النقل والحاويات");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const translated = translateText(originalText.get(node));
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }
  $$("[placeholder], [aria-label], [title]").forEach(element => {
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = {};
      originalAttributes.set(element, originals);
    }
    ["placeholder", "aria-label", "title"].forEach(name => {
      if (element.hasAttribute(name) && !(name in originals)) originals[name] = element.getAttribute(name);
      if (name in originals) {
        const translated = translateText(originals[name]);
        if (element.getAttribute(name) !== translated) element.setAttribute(name, translated);
      }
    });
  });
  $$("[data-language-toggle]").forEach(button => {
    const label = language === "ar" ? "English" : "العربية";
    const ariaLabel = language === "ar" ? "Switch to English" : "التبديل إلى العربية";
    if (button.textContent !== label) button.textContent = label;
    if (button.getAttribute("aria-label") !== ariaLabel) button.setAttribute("aria-label", ariaLabel);
  });
}

function updateTodayLabel() {
  const locale = language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB";
  $("#today-label").textContent = new Intl.DateTimeFormat(locale, {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  }).format(new Date());
}

function setLanguage(nextLanguage) {
  if (nextLanguage !== "ar" && nextLanguage !== "en") return;
  language = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, language);
  updateTodayLabel();
  localizeDocument();
  if (!$("#admin-app").classList.contains("hidden")) {
    const activeView = $(".view.active");
    if (activeView) switchView(activeView.id.replace("view-", ""));
  } else if (!$("#driver-app").classList.contains("hidden")) {
    renderDriverDashboard();
  }
  localizeDocument();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "—";
  const locale = language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB";
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function formatDateTime(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  const locale = language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB";
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
  }).format(date);
}

function formatCurrency(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "—";
  const locale = language === "ar" ? "ar-SA" : "en-SA";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "SAR" }).format(amount);
}

function showToast(message, isError = false) {
  const toast = $("#toast");
  toast.textContent = translateText(message);
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3300);
}

function truckById(id) { return state.trucks.find(item => item.id === id); }
function truckForTrip(doc) {
  return truckById(doc.truckId) || (doc.truckPlateNumber || doc.truckFleetNumber ? {
    plateNumber: doc.truckPlateNumber,
    fleetNumber: doc.truckFleetNumber,
    serialNumber: doc.truckSerialNumber,
    model: doc.truckModel
  } : null);
}
function driverById(id) { return state.drivers.find(item => item.id === id); }
function clearanceById(id) { return state.clearances.find(item => item.id === id); }

function normalizedUsername(value) {
  return String(value || "").trim().toLocaleLowerCase();
}

const API_ERRORS = {
  authentication_required: "انتهت الجلسة. سجّل الدخول مجدداً.",
  driver_account_inactive: "حساب السائق غير نشط. يرجى التواصل مع الإدارة.",
  invalid_credentials: "اسم المستخدم أو كلمة المرور غير صحيحة.",
  setup_already_complete: "تم إنشاء حساب المدير الأول مسبقاً.",
  record_already_exists: "توجد بيانات مسجلة بهذه القيمة مسبقاً.",
  record_not_found: "السجل المطلوب غير موجود.",
  invalid_trip_expense: "تحقق من مبلغ ونوع المصروف والرحلة.",
  invalid_domestic_trip_input: "تحقق من بيانات رحلة النقل الداخلي.",
  domestic_trip_unavailable: "لا يمكن تعديل أو حذف الرحلة بعد بدء تنفيذها أو إصدار فاتورة أو تسجيل مصروفات.",
  expense_trip_unavailable: "لا يمكن إضافة تكلفة لهذه الرحلة.",
  driver_only: "هذه الخدمة متاحة لحسابات السائقين فقط.",
  invalid_excel_file: "تعذر قراءة ملف Excel. ارفع ملفاً صالحاً بصيغة .xlsx.",
  invalid_fasah_pdf: "تعذر قراءة الملف. ارفع تذكرة فسح بصيغة PDF ولا يتجاوز حجمها 5 MB.",
  invalid_transport_document_pdf: "تعذر قراءة ملف PDF لمستند النقل.",
  transport_document_pdf_text_unavailable: "لا يحتوي PDF على نص قابل للقراءة. قد يكون ممسوحاً ضوئياً.",
  transport_document_pdf_page_limit: "يتجاوز PDF الحد الأقصى البالغ 20 صفحة للاستخراج.",
  unsupported_fasah_pdf: "الملف ليس تذكرة موعد فسح بالتنسيق المدعوم.",
  fasah_pdf_text_unavailable: "تعذر استخراج النص من الملف. استخدم PDF نصياً غير ممسوح ضوئياً.",
  fasah_pdf_page_limit: "الحد الأقصى لتذكرة الموعد هو 5 صفحات.",
  invalid_fasah_appointment: "تحقق من الرقم المرجعي والحقول المدخلة.",
  fasah_appointment_exists: "رقم مرجع الحجز مسجل مسبقاً.",
  fasah_pdf_reference_mismatch: "بيانات الحجز لا تطابق ملف PDF المرفق.",
  import_file_too_large: "حجم ملف Excel يجب ألا يتجاوز 3 MB.",
  import_row_limit_exceeded: "الحد الأقصى 500 صف في ملف Excel.",
  import_empty: "الملف لا يحتوي على بيانات للاستيراد.",
  invalid_import_headers: "استخدم نموذج Excel الصحيح مع إبقاء صف العناوين كما هو.",
  import_validation_failed: "لم يتم استيراد البيانات بسبب وجود صفوف غير صحيحة:",
  import_conflict: "لم يتم استيراد البيانات بسبب وجود تعارض في الصفوف:",
  truck_details_conflict: "بيانات الشاحنة مسجلة مسبقاً.",
  driver_details_conflict: "بيانات السائق مسجلة مسبقاً.",
  truck_has_active_trip: "لا يمكن تعديل الشاحنة أو حذفها لارتباطها برحلة نشطة.",
  driver_has_active_trip: "لا يمكن حذف السائق لارتباطه برحلة نشطة.",
  active_driver_required: "اختر سائقاً نشطاً.",
  driver_account_required: "أنشئ حساباً للسائق المحدد قبل تعيين رحلة له.",
  driver_account_unavailable: "السائق غير متاح أو لديه حساب بالفعل.",
  invalid_attachments: "تحقق من الملفات المرفقة وصيغها.",
  attachment_count_exceeded: "اختر 4 ملفات كحد أقصى.",
  attachment_size_exceeded: "حجم الملف الواحد لا يتجاوز 5 MB وإجمالي الملفات لا يتجاوز 8 MB.",
  attachment_type_invalid: "ارفع ملفات PDF أو JPG أو PNG فقط.",
  attachment_access_denied: "لا تملك صلاحية تنزيل هذا المرفق.",
  archive_pdf_no_files: "العمليات المحددة لا تحتوي على ملفات PDF من النوع المختار.",
  archive_pdf_too_large: "إجمالي حجم ملفات PDF المحددة يتجاوز الحد المسموح به (50 MB).",
  archive_pdf_invalid: "تعذر دمج أحد ملفات PDF المحددة لأنه غير صالح أو محمي.",
  archive_selection_limit: "يمكن دمج ملفات PDF لما يصل إلى 500 عملية في المرة الواحدة.",
  request_too_large: "حجم الطلب أكبر من الحد المسموح. قلّل حجم المرفقات.",
  invalid_request_body: "تعذر قراءة بيانات الطلب.",
  clearance_unavailable: "البيان غير متاح أو سبق استخدامه في رحلة.",
  invalid_manual_clearance_input: "تحقق من جميع حقول بيانات الفسح.",
  clearance_confirmation_required: "أكد حالة الفسح وتاريخه من مستند رسمي قبل الحفظ.",
  invalid_trip_input: "تحقق من بيانات الرحلة والوثيقة المدخلة.",
  container_details_conflict: "بيانات الحاوية المسجلة لا تطابق المقاس أو النوع المدخل.",
  clearance_has_trip: "لا يمكن تعديل بيانات فسح مرتبطة برحلة.",
  truck_unavailable: "الشاحنة غير متاحة.",
  trip_request_unavailable: "طلب الرحلة غير متاح لهذا الحساب.",
  trip_stage_unavailable: "لا يمكن تحديث مرحلة هذه الرحلة.",
  trip_already_returned: "تم تسجيل عودة الحاوية مسبقاً.",
  trip_cancel_unavailable: "لا يمكن إلغاء رحلة مكتملة أو مرتبطة بفاتورة أو لم يتم قبولها.",
  trip_cancelled: "الرحلة ملغاة ولا يمكن إتمامها.",
  last_admin_required: "لا يمكن تغيير نوع حساب آخر مدير في النظام.",
  integration_not_configured: "الربط الرسمي غير مهيأ حالياً. لم تُستخدم بيانات محاكاة.",
  origin_not_allowed: "تم رفض الطلب بسبب مصدر غير موثوق."
};
const IMPORT_ROW_ERRORS = {
  invalid_row: "بيانات ناقصة أو غير صحيحة.",
  duplicate_in_file: "تكرار بيانات داخل الملف.",
  already_exists: "مسجل مسبقاً في النظام.",
  driver_not_found: "رقم هوية السائق غير موجود أو غير نشط."
};

async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");
  if (options.body !== undefined) headers.set("Content-Type", "application/json");
  const response = await fetch(path, {
    ...options,
    headers,
    credentials: "same-origin",
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  });
  if (response.status === 204) return null;

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const baseMessage = API_ERRORS[payload.error] || payload.message || `تعذر إكمال الطلب (${response.status}).`;
    const details = Array.isArray(payload.details) ? payload.details.slice(0, 8).map(detail => {
      if (typeof detail === "string") return detail;
      const reason = IMPORT_ROW_ERRORS[detail.code] || "بيانات الصف غير صالحة.";
      return detail.row ? `صف ${detail.row}: ${reason}` : reason;
    }).join("، ") : "";
    const moreDetails = Array.isArray(payload.details) && payload.details.length > 8 ? " ..." : "";
    const message = [baseMessage, details, moreDetails].filter(Boolean).join(" ");
    const error = new Error(message);
    error.status = response.status;
    error.code = payload.error;
    throw error;
  }
  return payload;
}

async function encodeSelectedAttachments(input) {
  const files = Array.from(input.files || []);
  if (files.length > 4) throw new Error(translateText("اختر 4 ملفات كحد أقصى."));

  let totalSize = 0;
  const allowedTypes = new Map([
    [".pdf", "application/pdf"],
    [".jpg", "image/jpeg"],
    [".jpeg", "image/jpeg"],
    [".png", "image/png"]
  ]);
  const attachments = [];
  for (const file of files) {
    if (file.size > 5 * 1024 * 1024) throw new Error(translateText("حجم الملف الواحد لا يتجاوز 5 MB."));
    totalSize += file.size;
    if (totalSize > 8 * 1024 * 1024) throw new Error(translateText("إجمالي المرفقات لا يتجاوز 8 MB."));

    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    const expectedType = allowedTypes.get(extension);
    if (!expectedType || (file.type && file.type !== expectedType)) {
      throw new Error(translateText("ارفع ملفات PDF أو JPG أو PNG فقط."));
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    let binary = "";
    for (let offset = 0; offset < bytes.length; offset += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
    }
    attachments.push({ name: file.name, type: expectedType, data: btoa(binary) });
  }
  return attachments;
}

function renderAttachmentLinks(attachments, label = "المرفقات المحفوظة") {
  if (!Array.isArray(attachments) || !attachments.length) return "";
  return `<div class="attachment-list"><strong>${translateText(label)}</strong>${attachments.map(file =>
    `<a href="/api/attachments/${encodeURIComponent(file.id)}" download>${translateText("تنزيل")} ${escapeHtml(file.name)} (${Math.ceil(file.size / 1024)} KB)</a>`
  ).join("")}</div>`;
}

async function refreshServerState() {
  state = await apiRequest("/api/app-state");
  trackingLastUpdatedAt = new Date();
  renderDashboard();
  renderFasahResults($("#fasah-query").value);
  renderFasahAppointments();
  renderFleet();
  renderDrivers();
  populateTruckDriverOptions();
  populateIssueOptions($("#issue-clearance").value);
  renderDomesticTrips();
  populateDomesticOptions();
  renderTariffs();
  renderInvoices();
  populateInvoiceWizardCustomers();
  populateCustomerDatalist();
  renderTripTracking();
  renderTripExpenses();
  renderArchive($("#archive-query").value);
  renderReports();
  if (currentAccount?.role === "ADMIN") renderAccounts();
  if (currentAccount?.role === "DRIVER") renderDriverDashboard();
  await renderIntegrationHealth();
}

async function renderIntegrationHealth() {
  try {
    const integrations = await apiRequest("/api/integrations");
    for (const [provider, info] of Object.entries(integrations)) {
      const topItem = $(`[data-integration="${provider}"]`);
      const row = $(`[data-integration-row="${provider}"]`);
      const connected = info.status === "CONNECTED";
      const dot = topItem?.querySelector(".health-dot");
      if (dot) dot.className = `health-dot ${connected ? "good" : "warning"}`;
      const status = row?.querySelector("[data-integration-status]");
      if (status) {
        status.textContent = connected ? "متصل" : "غير مربوط";
        status.className = `status-pill ${connected ? "status-connected" : "status-pending"}`;
      }
    }
  } catch (error) {
    console.error("تعذر التحقق من حالة المنصات.", error);
    $$("[data-integration-status]").forEach(status => {
      status.textContent = "تعذر التحقق";
      status.className = "status-pill status-maintenance";
    });
  }
}

function showAuthMessage(message, isError = true) {
  const element = $("#auth-message");
  element.textContent = message;
  element.classList.remove("hidden", "success");
  if (!isError) element.classList.add("success");
}

function hideAuthMessage() {
  $("#auth-message").classList.add("hidden");
}

function showAuthScreen(setupRequired) {
  currentAccount = null;
  $("#admin-app").classList.add("hidden");
  $("#driver-app").classList.add("hidden");
  $("#auth-screen").classList.remove("hidden");
  hideAuthMessage();
  $("#auth-setup-panel").classList.toggle("hidden", !setupRequired);
  $("#auth-login-panel").classList.toggle("hidden", setupRequired);
}

async function showApplication(account) {
  currentAccount = account;
  await refreshServerState();
  $("#auth-screen").classList.add("hidden");
  if (account.role === "ADMIN") {
    $("#driver-app").classList.add("hidden");
    $("#admin-app").classList.remove("hidden");
    $("#admin-accounts-link").classList.remove("hidden");
    $("#current-user-name").textContent = account.username;
    $("#current-user-role").textContent = "مدير النظام";
    renderAccounts();
    switchView("dashboard");
    return;
  }
  const driver = driverById(account.driverId);
  if (!driver || driver.deletedAt || !driver.isActive) {
    showAuthScreen(false);
    showAuthMessage("حساب السائق غير نشط. يرجى التواصل مع الإدارة.");
    return;
  }
  $("#admin-app").classList.add("hidden");
  $("#driver-app").classList.remove("hidden");
  $("#driver-user-name").textContent = account.username;
  $("#driver-display-name").textContent = driver.name;
  activeDriverTab = state.docs.some(doc => doc.driverId === driver.id && doc.requestStatus === "PENDING") ? "requests" : "trips";
  renderDriverDashboard();
}

async function restoreSessionOrShowLogin() {
  try {
    const { user } = await apiRequest("/api/auth/session");
    await showApplication(user);
  } catch (error) {
    if (error.status !== 401) {
      showAuthScreen(false);
      showAuthMessage("تعذر الاتصال بالخادم. تحقق من اتصال الشبكة ثم أعد المحاولة.");
      return;
    }
    try {
      const { setupRequired } = await apiRequest("/api/auth/setup-status");
      showAuthScreen(setupRequired);
    } catch (setupError) {
      console.error("تعذر التحقق من إعداد النظام.", setupError);
      showAuthScreen(false);
      showAuthMessage("تعذر الاتصال بالخادم. تحقق من اتصال الشبكة ثم أعد المحاولة.");
    }
  }
}

async function setupFirstAdmin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const username = normalizedUsername(values.username);
  if (username.length < 3) return showAuthMessage("اسم المستخدم يجب أن يتكون من ٣ أحرف على الأقل.");
  if (state.accounts.some(account => normalizedUsername(account.username) === username && !account.deletedAt)) {
    return showAuthMessage("اسم المستخدم مستخدم بالفعل.");
  }
  if (values.password.length < 12) return showAuthMessage("كلمة المرور يجب ألا تقل عن ١٢ حرفاً.");
  if (values.password !== values.passwordConfirm) return showAuthMessage("كلمتا المرور غير متطابقتين.");
  try {
    const { user } = await apiRequest("/api/auth/setup", {
      method: "POST",
      body: { username, password: values.password }
    });
    form.reset();
    await showApplication(user);
  } catch (error) {
    showAuthMessage(error.message);
  }
}

async function login(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  try {
    const { user } = await apiRequest("/api/auth/login", {
      method: "POST",
      body: { username: normalizedUsername(values.username), password: values.password }
    });
    form.reset();
    await showApplication(user);
  } catch (error) {
    showAuthMessage(error.message);
  }
}

async function logout() {
  try {
    await apiRequest("/api/auth/logout", { method: "POST" });
  } catch (error) {
    if (error.status !== 401) console.error("تعذر إنهاء جلسة المستخدم.", error);
  }
  state = { trucks: [], drivers: [], clearances: [], docs: [], accounts: [] };
  editingAccountId = null;
  $("#account-form").reset();
  setAccountFormMode(false);
  try {
    const { setupRequired } = await apiRequest("/api/auth/setup-status");
    showAuthScreen(setupRequired);
  } catch (error) {
    showAuthScreen(false);
    showAuthMessage(error.message);
  }
}

function returnState(doc) {
  if (doc.cancelledAt) return "cancelled";
  if (doc.returnedAt) return "returned";
  if (!doc.returnDueAt) return "active";
  const days = Math.ceil((new Date(`${doc.returnDueAt}T23:59:59`) - new Date()) / 86400000);
  if (days < 0) return "overdue";
  if (days <= 2) return "soon";
  return "active";
}

function returnLabel(doc) {
  const value = returnState(doc);
  if (value === "returned") return { text: `تمت الإعادة ${formatDate(doc.returnedAt)}${doc.eir ? ` · ${doc.eir}` : ""}`, className: "return-done" };
  if (value === "overdue") return { text: `متأخرة · الاستحقاق ${formatDate(doc.returnDueAt)}`, className: "return-late" };
  if (value === "soon") return { text: `تقترب المهلة · ${formatDate(doc.returnDueAt)}`, className: "return-soon" };
  return { text: `ضمن المهلة · ${formatDate(doc.returnDueAt)}`, className: "" };
}

function truckStatusPill(status) {
  const item = TRUCK_STATUSES[status] || TRUCK_STATUSES.INACTIVE;
  return `<span class="status-pill ${item.className}">${item.label}</span>`;
}

function clearanceStatusPill(status) {
  const item = CLEARANCE_LABELS[status] || CLEARANCE_LABELS.PENDING;
  return `<span class="status-pill ${item.className}">${translateText(item.text)}</span>`;
}

function documentStatus(doc) {
  if (doc.status === "DRAFT") return { text: translateText("مسودة داخلية — غير صادرة"), className: "status-pending" };
  if (doc.status === "FAILED") return { text: translateText("تعذر الإصدار الرسمي"), className: "status-maintenance" };
  if (doc.status === "CANCELLED") return { text: translateText("ملغاة"), className: "status-neutral" };
  if (doc.source === "MANUAL_ENTRY") {
    const tripStatus = doc.returnedAt ? "مكتملة"
      : doc.requestStatus === "PENDING" ? "بانتظار قبول السائق"
        : doc.acceptedAt ? "قيد التنفيذ" : "";
    return {
      text: [translateText("مدخل يدوياً"), tripStatus && translateText(tripStatus)].filter(Boolean).join(" · "),
      className: "status-issued"
    };
  }
  if (doc.requestStatus === "PENDING") return { text: translateText("بانتظار قبول السائق"), className: "status-pending" };
  if (doc.returnedAt) return { text: translateText("مكتملة"), className: "status-issued" };
  if (doc.acceptedAt) return { text: translateText("قيد التنفيذ"), className: "status-on-trip" };
  return { text: translateText("صادرة"), className: "status-issued" };
}

function documentLabel(doc) {
  return doc.documentNumber || "مسودة";
}

function showDriverTab(tab) {
  activeDriverTab = ["trips", "expenses"].includes(tab) ? tab : "requests";
  $("#driver-requests-panel").classList.toggle("active", activeDriverTab === "requests");
  $("#driver-trips-panel").classList.toggle("active", activeDriverTab === "trips");
  $("#driver-expenses-panel").classList.toggle("active", activeDriverTab === "expenses");
  $$(".driver-tab-button").forEach(button => button.classList.toggle("active", button.dataset.driverTab === activeDriverTab));
}

function switchView(name) {
  const view = $(`#view-${name}`);
  if (!view) return;
  $$(".view").forEach(item => item.classList.toggle("active", item === view));
  $$(".nav-link").forEach(item => item.classList.toggle("active", item.dataset.view === name));
  const titles = {
    dashboard: "لوحة التحكم",
    fasah: "استعلام الفسح",
    issue: "إصدار وثيقة نقل",
    domestic: "النقل الداخلي",
    tariffs: "أسعار وتعريفة الشركات",
    invoices: "الفواتير وحسابات الشركات",
    fleet: "الأسطول والسائقون",
    tracking: "تتبع الرحلات",
    expenses: "تكاليف الرحلات",
    archive: "أرشيف الوثائق",
    reports: "التقارير والتصدير",
    accounts: "حسابات المستخدمين"
  };
  $("#page-title").textContent = translateText(titles[name] || "الرئيسية");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "dashboard") renderDashboard();
  if (name === "fasah") renderFasahResults($("#fasah-query").value);
  if (name === "issue") populateIssueOptions();
  if (name === "domestic") { renderDomesticTrips(); populateDomesticOptions(); }
  if (name === "tariffs") renderTariffs();
  if (name === "invoices") { renderInvoices(); populateInvoiceWizardCustomers(); }
  if (name === "fleet") { renderFleet(); renderDrivers(); }
  if (name === "tracking") renderTripTracking();
  if (name === "expenses") renderTripExpenses();
  if (name === "archive") renderArchive($("#archive-query").value);
  if (name === "reports") renderReports();
  if (name === "accounts") renderAccounts();
}

function renderDashboard() {
  $("#stat-trucks").textContent = state.trucks.filter(truck => !truck.deletedAt && truck.status !== "INACTIVE").length;
  $("#stat-documents").textContent = state.docs.filter(doc => doc.status === "ISSUED").length;
  $("#stat-clearances").textContent = state.clearances.filter(item => item.status === "CLEARED" && item.clearedAt === dateOnly()).length;
  $("#stat-ports").textContent = state.trucks.filter(truck => truck.status === "ON_TRIP").length;
  const rows = [...state.docs].sort((a, b) => b.issuedAt.localeCompare(a.issuedAt)).slice(0, 5);
  $("#recent-operations").innerHTML = rows.length ? rows.map(doc => `
    <tr>
      <td><span class="doc-number">${escapeHtml(documentLabel(doc))}</span></td>
      <td>${escapeHtml(doc.containerNumber)}</td>
      <td>${escapeHtml(doc.customerName)}</td>
      <td>${escapeHtml(doc.port)}</td>
      <td><span class="status-pill ${documentStatus(doc).className}">${documentStatus(doc).text}</span></td>
      <td><div class="mini-actions"><button class="icon-button" title="عرض / طباعة الوثيقة" data-action="pdf" data-id="${escapeHtml(doc.id)}">PDF</button><button class="icon-button" title="عرض في الأرشيف" data-action="archive" data-id="${escapeHtml(doc.id)}">↗</button></div></td>
    </tr>`).join("") : `<tr><td colspan="6" class="empty-row">لا توجد عمليات بعد. ابدأ بالاستعلام عن بيان.</td></tr>`;
}

function renderFasahAppointmentCard(appointment) {
  const details = [
    ["الرقم المرجعي للحجز", appointment.bookingReferenceNumber],
    ["رقم تذكرة المشغل", appointment.operatorTicketNumber],
    ["المنطقة / البوابة", appointment.zoneGateName],
    ["اسم مشغل الميناء", appointment.portContractorName],
    ["رقم مشغل الميناء", appointment.portContractorId],
    ["الميناء", appointment.portName],
    ["تاريخ الموعد", appointment.appointmentDate],
    ["وقت الموعد", appointment.appointmentTime],
    ["رقم لوحة المركبة", appointment.vehiclePlateNumber],
    ["نوع لوحة المركبة", appointment.vehiclePlateType],
    ["اللون", appointment.vehicleColor],
    ["رقم تتبع المركبة", appointment.vehicleRefId],
    ["الرقم التسلسلي للمركبة", appointment.vehicleSerialId],
    ["طراز المركبة", appointment.vehicleModel],
    ["اسم السائق", appointment.driverName],
    ["رقم جوال السائق", appointment.driverMobileNumber],
    ["رقم رخصة السائق", appointment.driverLicenseNumber],
    ["موقع الدخول داخل الميناء", appointment.entryLocation],
    ["بوليصة الدخول", appointment.entryBlNumber],
    ["بيان الدخول", appointment.entryDeclarationNumber],
    ["حاوية الدخول", appointment.entryContainerNumber],
    ["بضاعة الدخول / الغرض", appointment.entryCargoType],
    ["الرقم التسلسلي للدخول", appointment.entrySerialNumber],
    ["موقع الخروج داخل الميناء", appointment.exitLocation],
    ["بوليصة الخروج", appointment.exitBlNumber],
    ["بيان الخروج", appointment.exitDeclarationNumber],
    ["حاوية الخروج", appointment.exitContainerNumber],
    ["بضاعة الخروج / الغرض", appointment.exitCargoType],
    ["الرقم التسلسلي للخروج", appointment.exitSerialNumber]
  ].filter(([, value]) => value);
  return `<article class="result-card">
    <div class="result-card-head"><div><h3>${translateText("موعد فسح")}: ${escapeHtml(appointment.bookingReferenceNumber)}</h3><p>${escapeHtml(appointment.portName || "—")} · ${formatDate(appointment.appointmentDate)}</p></div><span class="status-pill status-neutral">${translateText("موعد محفوظ")}</span></div>
    <div class="result-details">${details.map(([label, value]) => `<div class="detail-item"><small>${translateText(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join("")}</div>
    ${renderAttachmentLinks(appointment.attachments, "ملف PDF الأصلي")}
    <div class="result-card-actions"><button class="button button-primary" data-action="use-fasah-appointment" data-id="${escapeHtml(appointment.id)}">${translateText("استخدام بيانات الموعد للرحلة")}</button></div>
  </article>`;
}

function renderFasahAppointments() {
  const query = $("#fasah-query").value.trim().toLocaleLowerCase("en");
  const appointments = (state.fasahAppointments || []).filter(appointment =>
    !query || Object.values(appointment).some(value =>
      typeof value === "string" && value.toLocaleLowerCase("en").includes(query)
    )
  );
  $("#fasah-appointment-count").textContent = appointments.length;
  $("#fasah-appointment-rows").innerHTML = appointments.length ? appointments.map(appointment => `
    <tr>
      <td>${escapeHtml(appointment.bookingReferenceNumber)}</td>
      <td>${escapeHtml(appointment.portName || "—")}<br>${formatDate(appointment.appointmentDate)} ${escapeHtml(appointment.appointmentTime || "")}</td>
      <td>${escapeHtml(appointment.vehiclePlateNumber || "—")}<br>${escapeHtml(appointment.vehicleModel || "—")}</td>
      <td>${escapeHtml(appointment.driverName || "—")}<br>${escapeHtml(appointment.driverMobileNumber || "—")}</td>
      <td>البيان: ${escapeHtml(appointment.exitDeclarationNumber || "—")}<br>الحاوية: ${escapeHtml(appointment.exitContainerNumber || "—")}</td>
      <td>${escapeHtml(appointment.exitBlNumber || "—")}<br>${escapeHtml(appointment.exitCargoType || "—")}</td>
      <td>${renderAttachmentLinks(appointment.attachments, "ملف PDF الأصلي") || "—"}</td>
      <td><div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-fasah-appointment" data-id="${escapeHtml(appointment.id)}" aria-label="${translateText("تعديل")} ${translateText("موعد فسح")} ${escapeHtml(appointment.bookingReferenceNumber)}">${translateText("تعديل")}</button><button class="delete-button" type="button" data-action="delete-fasah-appointment" data-id="${escapeHtml(appointment.id)}" aria-label="${translateText("حذف")} ${translateText("موعد فسح")} ${escapeHtml(appointment.bookingReferenceNumber)}">${translateText("حذف")}</button></div></td>
    </tr>`).join("") : `<tr><td colspan="8" class="empty-row">${translateText(query ? "لم يُعثر على مواعيد فسح مطابقة." : "لا توجد مواعيد فسح محفوظة.")}</td></tr>`;
}

function beginFasahAppointmentEdit(id) {
  const appointment = state.fasahAppointments.find(item => item.id === id);
  if (!appointment) return showToast("تعذر العثور على موعد فسح محفوظ.", true);

  editingFasahAppointmentId = appointment.id;
  const form = $("#fasah-appointment-review-form");
  for (const [name, value] of Object.entries(appointment)) {
    const input = form.elements.namedItem(name);
    if (input && input.type !== "file") input.value = value || "";
  }
  $("#fasah-appointment-file").value = "";
  $("#fasah-appointment-file").disabled = false;
  $("#fasah-appointment-file").required = false;
  $("#fasah-pdf-extract-form").classList.add("hidden");
  $("#fasah-appointment-edit-hint").classList.remove("hidden");
  $("#fasah-appointment-save").textContent = translateText("حفظ تعديلات الموعد");
  $("#fasah-pdf-message").classList.add("hidden");
  form.classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deleteFasahAppointment(id) {
  const appointment = state.fasahAppointments.find(item => item.id === id);
  if (!appointment) return showToast("تعذر العثور على موعد فسح محفوظ.", true);
  if (!window.confirm(`${translateText("هل تريد حذف موعد الفسح ")}${appointment.bookingReferenceNumber}${translateText("؟ لا يمكن التراجع عن هذا الإجراء.")}`)) return;

  try {
    await apiRequest(`/api/fasah/appointments/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingFasahAppointmentId === id) cancelFasahAppointmentPreview();
    if (latestFasahPdfExtraction?.appointmentId === id) latestFasahPdfExtraction = null;
    await refreshServerState();
    await renderFasahResults($("#fasah-query").value);
    renderFasahAppointments();
    showToast("تم حذف موعد فسح وملف PDF المرتبط به.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function appointmentDeclarationNumber(appointment) {
  return appointment.exitDeclarationNumber || appointment.entryDeclarationNumber || "";
}

function appointmentContainerNumber(appointment) {
  return appointment.exitContainerNumber || appointment.entryContainerNumber || "";
}

function normalizeContainerNumber(value) {
  return String(value || "").trim().toLocaleUpperCase("en").replace(/\s/g, "");
}

function appointmentPortName(portName) {
  return String(portName || "").trim();
}

function portCityFromName(portName) {
  const value = String(portName || "").normalize("NFKC").toLocaleLowerCase("en");
  if (value.includes("جدة") || value.includes("jeddah")) return "جدة";
  if (value.includes("الملك عبدالله") || value.includes("king abdullah")) return "مدينة الملك عبدالله الاقتصادية";
  if (value.includes("الدمام") || value.includes("dammam") || value.includes("king abdulaziz")) return "الدمام";
  return "";
}

function updateClearancePortCity() {
  const portName = $("#clearance-port").value.trim();
  const city = portCityFromName($("#clearance-port").value);
  const cityInput = $("#clearance-port-city");
  cityInput.value = city;
  cityInput.required = Boolean(portName && !city);
  $("#clearance-port-city-field").classList.toggle("hidden", Boolean(city) || !portName);
}

function beginClearanceEdit(id) {
  const clearance = clearanceById(id);
  if (!clearance) return showToast("تعذر العثور على سجل الفسح.", true);
  if (state.docs.some(doc => doc.clearanceId === id)) {
    return showToast("لا يمكن تعديل بيانات فسح مرتبطة برحلة.", true);
  }

  editingClearanceId = id;
  pendingFasahAppointmentId = null;
  const form = $("#clearance-form");
  form.reset();
  for (const [field, value] of Object.entries({
    declarationNumber: clearance.declarationNumber,
    containerNumber: clearance.containerNumber,
    size: clearance.size === "20 قدم" ? "FT_20" : "FT_40",
    type: clearance.type,
    sealNumber: clearance.sealNumber || "",
    vesselName: clearance.vesselName || "",
    portName: clearance.port,
    status: clearance.status,
    clearedAt: clearance.clearedAt || ""
  })) {
    form.elements.namedItem(field).value = value;
  }
  const knownCity = portCityFromName(clearance.port);
  const cityInput = $("#clearance-port-city");
  cityInput.value = clearance.portCity || knownCity;
  cityInput.required = Boolean(clearance.port && !knownCity);
  $("#clearance-port-city-field").classList.toggle("hidden", Boolean(knownCity) || !clearance.port);
  $("#clearance-declaration-field").classList.remove("hidden");
  $("#clearance-confirmed").checked = false;
  $("#clearance-submit-button").textContent = translateText("حفظ تعديلات الفسح");
  $("#cancel-clearance-edit").classList.remove("hidden");
  $("#clearance-form-wrap").classList.remove("hidden");
  updateClearanceConfirmation();
  $("#clearance-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelClearanceEdit() {
  editingClearanceId = null;
  pendingFasahAppointmentId = null;
  $("#clearance-form").reset();
  $("#clearance-declaration-field").classList.remove("hidden");
  $("#clearance-submit-button").textContent = translateText("إضافة بيانات الفسح");
  $("#cancel-clearance-edit").classList.add("hidden");
  $("#clearance-form-wrap").classList.add("hidden");
  updateClearancePortCity();
  updateClearanceConfirmation();
}

function fillClearanceFormFromAppointment(appointment, appointmentId = null, resetForm = true) {
  const declarationNumber = appointmentDeclarationNumber(appointment).trim();
  const containerNumber = appointmentContainerNumber(appointment).trim();
  if (!declarationNumber && !containerNumber) return false;

  pendingFasahAppointmentId = appointmentId;
  const form = $("#clearance-form");
  if (resetForm) form.reset();
  if (declarationNumber) form.elements.namedItem("declarationNumber").value = declarationNumber;
  if (containerNumber) form.elements.namedItem("containerNumber").value = containerNumber;
  if (resetForm) {
    form.elements.namedItem("size").value = appointment.containerSize || "FT_40";
    form.elements.namedItem("type").value = appointment.containerType || "";
    form.elements.namedItem("status").value = "CLEARED";
  }
  const appointmentDate = appointment.clearedAt || appointment.appointmentDate || "";
  if (appointmentDate || resetForm) form.elements.namedItem("clearedAt").value = appointmentDate;
  if (resetForm || declarationNumber) {
    $("#clearance-declaration-field").classList.toggle("hidden", Boolean(declarationNumber));
  }
  $("#clearance-confirmed").checked = false;
  const portInput = $("#clearance-port");
  const portName = appointmentPortName(appointment.portName);
  if (resetForm || portName) {
    portInput.value = portName;
    updateClearancePortCity();
  }
  updateClearanceConfirmation();
  $("#clearance-form-wrap").classList.remove("hidden");
  return Boolean(declarationNumber && containerNumber);
}

function fillClearanceFromLatestPdf() {
  const latestSavedAppointment = [...(state.fasahAppointments || [])].sort((left, right) =>
    Date.parse(right.createdAt) - Date.parse(left.createdAt)
  )[0];
  const savedAt = latestSavedAppointment
    ? Date.parse(latestSavedAppointment.createdAt)
    : Number.NEGATIVE_INFINITY;
  const useCurrentExtraction = Boolean(latestFasahPdfExtraction) &&
    latestFasahPdfExtraction.extractedAt >= savedAt;
  const appointment = useCurrentExtraction
    ? latestFasahPdfExtraction.fields
    : latestSavedAppointment;
  const appointmentId = useCurrentExtraction
    ? latestFasahPdfExtraction.appointmentId
    : latestSavedAppointment?.id;
  if (!appointment) {
    return showToast("لا توجد بيانات PDF محفوظة. ارفع تذكرة فسح واستخرج بياناتها أولاً.", true);
  }

  const hasIdentifiers = Boolean(
    appointmentDeclarationNumber(appointment).trim() ||
    appointmentContainerNumber(appointment).trim()
  );
  if (!hasIdentifiers) {
    return showToast("أحدث تذكرة PDF لا تحتوي رقم البيان أو رقم الحاوية.", true);
  }

  const complete = fillClearanceFormFromAppointment(appointment, appointmentId, false);
  showToast(complete
    ? "تم جلب بيانات الفسح من أحدث PDF مستخرج."
    : "تم جلب البيانات المتاحة من أحدث PDF مستخرج. أكمل رقم البيان أو الحاوية الناقص يدوياً.", !complete);
}

function updateClearanceConfirmation() {
  const isCleared = $("#clearance-status").value === "CLEARED";
  const checkbox = $("#clearance-confirmed");
  checkbox.required = isCleared;
  $("#clearance-confirmation-wrap").classList.toggle("hidden", !isCleared);
  if (!isCleared) checkbox.checked = false;
}

function normalizePhoneNumber(value) {
  const digits = String(value || "")
    .replace(/[٠-٩۰-۹]/g, digit => String("٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹".indexOf(digit) % 10))
    .replace(/\D/g, "");
  if (digits.startsWith("00966")) return `0${digits.slice(5)}`;
  if (digits.startsWith("966")) return `0${digits.slice(3)}`;
  if (digits.length === 9 && digits.startsWith("5")) return `0${digits}`;
  return digits;
}

function matchIssueDriverFromAppointment(appointment) {
  const phone = normalizePhoneNumber(appointment.driverMobileNumber);
  if (!phone) return "unmatched";
  const matches = state.drivers.filter(driver =>
    !driver.deletedAt && driver.isActive && hasActiveDriverAccount(driver.id) &&
    normalizePhoneNumber(driver.phone) === phone
  );
  if (matches.length !== 1) return "unmatched";

  $("#issue-driver").value = matches[0].id;
  syncIssueTruckDriver("driver", false);
  autoMatchedIssueSelection = {
    clearanceId: $("#issue-clearance").value,
    driverId: matches[0].id,
    truckId: $("#issue-truck").value
  };
  return $("#issue-truck").value ? "matched" : "no_available_truck";
}

function resetAppointmentIssueContext() {
  issueDriverMatchSequence += 1;
  autoMatchedIssueSelection = null;
  $("#issue-truck").value = "";
  $("#issue-driver").value = "";
  $("#issue-customer").value = "";
  $("#issue-destination").value = "";
  $("#issue-return-date").value = "";
}

function prepareTripFromFasahAppointment(id) {
  const appointment = (state.fasahAppointments || []).find(item => item.id === id);
  if (!appointment) return showToast("تعذر العثور على موعد فسح محفوظ.", true);

  const declarationNumber = appointmentDeclarationNumber(appointment).trim();
  const containerNumber = appointmentContainerNumber(appointment).trim();
  if (!declarationNumber || !containerNumber) {
    return showToast("لا تتضمن التذكرة رقم بيان وحاوية صالحين.", true);
  }

  const matchingClearances = state.clearances.filter(item =>
    normalizeContainerNumber(item.containerNumber) === normalizeContainerNumber(containerNumber)
  );
  if (matchingClearances.length) {
    const clearance = matchingClearances[0];
    if (clearance.declarationNumber.trim() !== declarationNumber) {
      return showToast("الحاوية مرتبطة ببيان جمركي مختلف عن بيانات الموعد.", true);
    }
    if (clearance.status !== "CLEARED") {
      return showToast("الحاوية مسجلة لكن حالة الفسح ليست مفسوحة، لذلك لا يمكن إصدار طلب رحلة.", true);
    }
    if (state.docs.some(doc => doc.clearanceId === clearance.id)) {
      return showToast("تم إصدار وثيقة لهذا البيان.");
    }

    switchView("issue");
    resetAppointmentIssueContext();
    populateIssueOptions(clearance.id);
    $("#issue-clearance").value = clearance.id;
    renderSelectedClearance();
    const driverMatch = matchIssueDriverFromAppointment(appointment);
    if (driverMatch === "matched") showToast("تم مطابقة رقم الجوال مع السائق المسجل.");
    else if (driverMatch === "no_available_truck") showToast("تم مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.", true);
    else showToast("رقم جوال التذكرة لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.", true);
    return;
  }

  fillClearanceFormFromAppointment(appointment, appointment.id);
  showToast("تم ملء البيان والحاوية واسم الميناء وتاريخ الموعد من PDF. المقاس افتراضياً 40 قدم؛ أدخل نوع الحاوية وراجع التاريخ وفق إثبات الفسح الرسمي.");
  $("#clearance-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

async function renderFasahResults(query) {
  const container = $("#fasah-results");
  const term = String(query || "").trim().toLowerCase();
  if (!term) {
    container.innerHTML = "";
    return;
  }
  const searchId = ++fasahSearchSequence;
  container.innerHTML = `<div class="panel empty-state"><strong>جارٍ البحث في سجلات الفسح المحفوظة…</strong></div>`;
  let matches;
  let appointmentMatches;
  try {
    const result = await apiRequest(`/api/fasah/lookup?q=${encodeURIComponent(term)}`);
    if (searchId !== fasahSearchSequence) return;
    matches = Array.isArray(result.clearances) ? result.clearances : [];
    appointmentMatches = Array.isArray(result.appointments) ? result.appointments : [];
    const appointmentIds = new Set(appointmentMatches.map(item => item.id));
    state.fasahAppointments = [
      ...appointmentMatches,
      ...(state.fasahAppointments || []).filter(item => !appointmentIds.has(item.id))
    ].slice(0, 100);
    renderFasahAppointments();
    for (const clearance of matches) {
      const index = state.clearances.findIndex(item => item.id === clearance.id);
      if (index === -1) state.clearances.push(clearance);
      else state.clearances[index] = clearance;
    }
  } catch (error) {
    if (searchId !== fasahSearchSequence) return;
    container.innerHTML = `<div class="panel empty-state"><strong>${escapeHtml(error.message)}</strong></div>`;
    return;
  }
  if (!matches.length && !appointmentMatches.length) {
    container.innerHTML = translateText(`<div class="panel empty-state"><span>⌕</span><strong>لم يتم العثور على نتائج</strong><p>ابحث عن بيان أو موعد فسح مسجل.</p></div>`);
    return;
  }
  const clearanceCards = matches.map(item => {
    const alreadyIssued = state.docs.some(doc => doc.clearanceId === item.id);
    return `<article class="result-card">
      <div class="result-card-head"><div><h3>بيان جمركي: ${escapeHtml(item.declarationNumber)}</h3><p>حاوية ${escapeHtml(item.containerNumber)} · بيانات مدخلة يدوياً وغير متحققة من منصة فسح</p></div>${clearanceStatusPill(item.status)}</div>
      <div class="result-details">
        <div class="detail-item"><small>رقم الحاوية</small><strong>${escapeHtml(item.containerNumber)}</strong></div>
        <div class="detail-item"><small>المقاس والنوع</small><strong>${escapeHtml(item.size)} · ${CONTAINER_TYPES[item.type] || "أخرى"}</strong></div>
        <div class="detail-item"><small>رقم الرصاص الملاحي</small><strong>${escapeHtml(item.sealNumber || "—")}</strong></div>
        <div class="detail-item"><small>اسم الباخرة</small><strong>${escapeHtml(item.vesselName || "—")}</strong></div>
        <div class="detail-item"><small>الميناء</small><strong>${escapeHtml(item.port)}</strong></div>
        <div class="detail-item"><small>تاريخ الفسح</small><strong>${formatDate(item.clearedAt)}</strong></div>
      </div>
      ${renderAttachmentLinks(item.attachments, "مرفقات الفسح")}
      <div class="result-card-actions"><button class="button button-light" data-action="edit-clearance" data-id="${escapeHtml(item.id)}" ${alreadyIssued ? "disabled title=\"لا يمكن تعديل سجل مرتبط برحلة\"" : ""}>تعديل بيانات الفسح</button>${alreadyIssued
        ? `<span class="status-pill status-neutral">تم إصدار وثيقة لهذا البيان</span>`
        : `<button class="button button-primary" data-action="issue-clearance" data-id="${escapeHtml(item.id)}" ${item.status !== "CLEARED" ? "disabled" : ""}>إنشاء طلب رحلة <span>←</span></button>`}
      </div>
    </article>`;
  }).join("");
  container.innerHTML = translateText(clearanceCards) + appointmentMatches.map(renderFasahAppointmentCard).join("");
}

function hasActiveDriverAccount(driverId) {
  return state.accounts.some(account =>
    account.role === "DRIVER" && account.driverId === driverId && account.isActive && !account.deletedAt
  );
}

function appointmentMatchesClearance(appointment, clearance) {
  const declarationNumber = clearance.declarationNumber.trim().toLocaleUpperCase("en");
  const containerNumber = normalizeContainerNumber(clearance.containerNumber);
  return [
    [appointment.entryDeclarationNumber, appointment.entryContainerNumber],
    [appointment.exitDeclarationNumber, appointment.exitContainerNumber]
  ].some(([appointmentDeclaration, appointmentContainer]) =>
    String(appointmentDeclaration || "").trim().toLocaleUpperCase("en") === declarationNumber &&
    normalizeContainerNumber(appointmentContainer) === containerNumber
  );
}

function clearAutoMatchedIssueSelection() {
  if (!autoMatchedIssueSelection) return;
  if ($("#issue-driver").value === autoMatchedIssueSelection.driverId) {
    $("#issue-driver").value = "";
  }
  if (autoMatchedIssueSelection.truckId &&
      $("#issue-truck").value === autoMatchedIssueSelection.truckId) {
    $("#issue-truck").value = "";
  }
  autoMatchedIssueSelection = null;
  renderSelectedDriverContact();
}

async function matchIssueDriverToSelectedClearance() {
  const clearanceId = $("#issue-clearance").value;
  const requestId = ++issueDriverMatchSequence;
  clearAutoMatchedIssueSelection();
  if (!clearanceId) return;
  const clearance = clearanceById(clearanceId);
  if (!clearance) return;

  let appointments = (state.fasahAppointments || [])
    .filter(appointment => appointmentMatchesClearance(appointment, clearance));
  if (!appointments.length) {
    try {
      const queries = [...new Set([clearance.declarationNumber, clearance.containerNumber].filter(Boolean))];
      const results = await Promise.all(queries.map(query =>
        apiRequest(`/api/fasah/lookup?q=${encodeURIComponent(query)}`)
      ));
      appointments = results.flatMap(result => result.appointments || [])
        .filter(appointment => appointmentMatchesClearance(appointment, clearance));
    } catch (error) {
      if (requestId === issueDriverMatchSequence && $("#issue-clearance").value === clearanceId) {
        showToast(error.message, true);
      }
      return;
    }
  }
  if (requestId !== issueDriverMatchSequence || $("#issue-clearance").value !== clearanceId) return;
  if (!appointments.length) {
    showToast("لم يُعثر على موعد فسح مطابق للبيان والحاوية. اختر السائق يدوياً.");
    return;
  }

  appointments.sort((first, second) =>
    (Date.parse(second.createdAt) || 0) - (Date.parse(first.createdAt) || 0)
  );
  const appointment = appointments[0];
  if (!normalizePhoneNumber(appointment.driverMobileNumber)) {
    showToast("موعد الفسح المطابق لا يحتوي على رقم جوال السائق. اختر السائق يدوياً.");
    return;
  }
  const result = matchIssueDriverFromAppointment(appointment);
  if (result === "matched") {
    showToast("تم اختيار السائق تلقائياً بناءً على رقم الجوال في موعد الفسح.");
  } else if (result === "no_available_truck") {
    showToast("تمت مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.", true);
  } else {
    showToast("رقم الجوال في موعد الفسح لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.", true);
  }
}

function populateIssueOptions(selectedId = "") {
  const clearanceSelect = $("#issue-clearance");
  const truckSelect = $("#issue-truck");
  const driverSelect = $("#issue-driver");
  const existingClearance = selectedId || clearanceSelect.value;
  clearanceSelect.innerHTML = `<option value="">اختر بياناً مفسوحاً</option>` + state.clearances.map(item => {
    const issued = state.docs.some(doc => doc.clearanceId === item.id);
    return `<option value="${escapeHtml(item.id)}" ${item.status !== "CLEARED" || issued ? "disabled" : ""}>${escapeHtml(item.declarationNumber)} — ${escapeHtml(item.containerNumber)} (${CLEARANCE_LABELS[item.status]?.text || "قيد الإجراء"})${issued ? " · مرتبط برحلة" : ""}</option>`;
  }).join("");
  if (existingClearance && clearanceById(existingClearance)) clearanceSelect.value = existingClearance;
  const currentTruck = truckSelect.value;
  const currentDriver = driverSelect.value;
  const availableTrucks = state.trucks.filter(item => !item.deletedAt && item.status === "AVAILABLE");
  truckSelect.innerHTML = `<option value="">اختر الشاحنة</option>` + availableTrucks.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.fleetNumber)} — ${escapeHtml(item.plateNumber)}</option>`).join("");
  if (availableTrucks.some(item => item.id === currentTruck)) truckSelect.value = currentTruck;
  const availableDrivers = state.drivers.filter(item => !item.deletedAt && item.isActive).map(item => ({
    ...item,
    hasAccount: hasActiveDriverAccount(item.id)
  }));
  driverSelect.innerHTML = `<option value="">اختر السائق</option>` + availableDrivers.map(item =>
    `<option value="${escapeHtml(item.id)}" ${item.hasAccount ? "" : "disabled"}>${escapeHtml(item.name)}${item.hasAccount ? "" : " — لا يوجد حساب"}</option>`
  ).join("");
  if (availableDrivers.some(item => item.id === currentDriver && item.hasAccount)) driverSelect.value = currentDriver;
  if (truckSelect.value) syncIssueTruckDriver("truck", false);
  else if (driverSelect.value) syncIssueTruckDriver("driver", false);
  if (!$("#issue-return-date").value) $("#issue-return-date").value = dateOffset(5);
  renderSelectedClearance();
  renderSelectedDriverContact();
}

function renderSelectedDriverContact() {
  const container = $("#issue-driver-contact");
  const driver = driverById($("#issue-driver").value);
  if (!driver) {
    container.classList.add("hidden");
    container.textContent = "";
    return;
  }
  container.classList.remove("hidden");
  container.innerHTML = `${translateText("جوال السائق")}: <strong>${escapeHtml(driver.phone || "—")}</strong>`;
}

function syncIssueTruckDriver(source, notify = true) {
  const truckSelect = $("#issue-truck");
  const driverSelect = $("#issue-driver");
  if (notify) {
    issueDriverMatchSequence += 1;
    autoMatchedIssueSelection = null;
  }
  const availableTrucks = state.trucks.filter(item => !item.deletedAt && item.status === "AVAILABLE");

  if (source === "truck") {
    const truck = availableTrucks.find(item => item.id === truckSelect.value);
    const driver = truck && state.drivers.find(item =>
      item.id === truck.driverId && !item.deletedAt && item.isActive &&
      hasActiveDriverAccount(item.id)
    );
    driverSelect.value = driver?.id || "";
    renderSelectedDriverContact();
    if (truck && !driver && notify) {
      showToast("الشاحنة المحددة لا ترتبط بسائق نشط له حساب. حدّث تعيين السائق من شاشة الأسطول.", true);
    }
    return;
  }

  const driverId = driverSelect.value;
  const matches = availableTrucks.filter(item => item.driverId === driverId);
  if (matches.length === 1) {
    truckSelect.value = matches[0].id;
    renderSelectedDriverContact();
    return;
  }
  truckSelect.value = "";
  renderSelectedDriverContact();
  if (driverId && notify) {
    showToast(matches.length > 1
      ? "توجد أكثر من شاحنة متاحة مرتبطة بهذا السائق. اختر الشاحنة يدوياً."
      : "لا توجد شاحنة متاحة مرتبطة بهذا السائق. عيّن شاحنة متاحة من شاشة الأسطول.", true);
  }
}

function renderSelectedClearance() {
  const item = clearanceById($("#issue-clearance").value);
  const box = $("#selected-clearance");
  if (!item) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  box.classList.remove("hidden");
  box.innerHTML = `الحاوية: <strong>${escapeHtml(item.containerNumber)}</strong> · الميناء: <strong>${escapeHtml(item.port)}</strong> · الحالة: ${CLEARANCE_LABELS[item.status]?.text || "غير معروفة"}${state.docs.some(doc => doc.clearanceId === item.id) ? " · يوجد إصدار سابق لهذا البيان." : ""}`;
}

function renderFleet() {
  const term = $("#truck-filter").value.trim().toLowerCase();
  const activeTrucks = state.trucks.filter(item => !item.deletedAt);
  const filtered = activeTrucks.filter(item => [item.fleetNumber, item.plateNumber, item.serialNumber, item.model, driverById(item.driverId)?.name].some(value => String(value || "").toLowerCase().includes(term)));
  $("#truck-count").textContent = activeTrucks.length;
  $("#truck-rows").innerHTML = filtered.length ? filtered.map(item => `<tr>
    <td><input class="select-checkbox truck-select" type="checkbox" data-id="${escapeHtml(item.id)}" aria-label="تحديد السيارة ${escapeHtml(item.plateNumber)}" ${selectedTruckIds.has(item.id) ? "checked" : ""}></td>
    <td>${escapeHtml(item.fleetNumber)}</td><td>${escapeHtml(item.plateNumber)}</td><td>${escapeHtml(item.serialNumber)}</td><td>${escapeHtml(item.model)}</td>
    <td><select class="truck-driver" data-id="${escapeHtml(item.id)}" aria-label="السائق المعيّن للسيارة ${escapeHtml(item.plateNumber)}"><option value="">غير معيّن</option>${state.drivers.filter(driver => !driver.deletedAt).map(driver => `<option value="${escapeHtml(driver.id)}" ${item.driverId === driver.id ? "selected" : ""}>${escapeHtml(driver.name)}${driver.isActive ? "" : " (غير نشط)"}</option>`).join("")}</select></td>
    <td><select class="truck-status" data-id="${escapeHtml(item.id)}" aria-label="حالة ${escapeHtml(item.fleetNumber)}">${Object.entries(TRUCK_STATUSES).map(([key, status]) => `<option value="${key}" ${item.status === key ? "selected" : ""}>${status.label}</option>`).join("")}</select></td>
    <td><div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-truck" data-id="${escapeHtml(item.id)}" aria-label="تعديل السيارة ${escapeHtml(item.plateNumber)}">تعديل</button><button class="delete-button" type="button" data-action="delete-truck" data-id="${escapeHtml(item.id)}" aria-label="حذف السيارة ${escapeHtml(item.plateNumber)}">حذف</button></div></td>
  </tr>`).join("") : `<tr><td colspan="8" class="empty-row">لا توجد سيارات مطابقة.</td></tr>`;
  updateBulkControls("trucks", filtered.map(item => item.id));
}

function populateTruckDriverOptions() {
  const select = $("#truck-driver");
  const selectedDriver = select.value;
  select.innerHTML = `<option value="">اختر السائق</option>` + state.drivers
    .filter(driver => !driver.deletedAt && driver.isActive)
    .map(driver => `<option value="${escapeHtml(driver.id)}">${escapeHtml(driver.name)}</option>`)
    .join("");
  if (state.drivers.some(driver => driver.id === selectedDriver && driver.isActive && !driver.deletedAt)) select.value = selectedDriver;
}

function renderDrivers() {
  const term = $("#driver-filter").value.trim().toLowerCase();
  const activeDrivers = state.drivers.filter(item => !item.deletedAt);
  const filtered = activeDrivers.filter(item => [item.name, item.nationalId, item.phone, item.passportNumber || ""].some(value => value.toLowerCase().includes(term)));
  $("#driver-count").textContent = activeDrivers.length;
  $("#driver-rows").innerHTML = filtered.length ? filtered.map(item => `<tr>
    <td><input class="select-checkbox driver-select" type="checkbox" data-id="${escapeHtml(item.id)}" aria-label="تحديد السائق ${escapeHtml(item.name)}" ${selectedDriverIds.has(item.id) ? "checked" : ""}></td>
    <td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.nationalId)}</td><td>${escapeHtml(item.phone)}</td><td>${escapeHtml(item.passportNumber || "—")}</td>
    <td><span class="status-pill ${item.isActive ? "status-available" : "status-neutral"}">${item.isActive ? "نشط" : "غير نشط"}</span></td>
    <td><div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-driver" data-id="${escapeHtml(item.id)}" aria-label="تعديل السائق ${escapeHtml(item.name)}">تعديل</button><button class="delete-button" type="button" data-action="delete-driver" data-id="${escapeHtml(item.id)}" aria-label="حذف السائق ${escapeHtml(item.name)}">حذف</button></div></td>
  </tr>`).join("") : `<tr><td colspan="7" class="empty-row">لا يوجد سائقون مطابقون.</td></tr>`;
  updateBulkControls("drivers", filtered.map(item => item.id));
}

function updateBulkControls(type, visibleIds) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى رحلاتها ووثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى رحلاتها ووثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  visibleIds.forEach(id => selected ? selectedIds.add(id) : selectedIds.delete(id));
  updateBulkControls(type, visibleIds);
}

function clearSelection(type) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  selectedIds.clear();
  if (type === "trucks") renderFleet();
  else renderDrivers();
}

function renderTripExpenses() {
  const expenses = state.tripExpenses || [];
  const editLabel = language === "en" ? "Edit" : "تعديل";
  const deleteLabel = language === "en" ? "Delete" : "حذف";
  const expenseLabel = language === "en" ? "expense for" : "تكلفة السائق";
  const canManageExpenses = currentAccount?.role === "ADMIN";
  const totalCents = expenses.reduce((sum, expense) => {
    const amount = Number(expense.amount);
    return sum + (Number.isFinite(amount) ? Math.round(amount * 100) : 0);
  }, 0);
  $("#expense-total").textContent = formatCurrency(totalCents / 100);
  $("#expense-count").textContent = expenses.length;
  $("#expense-rows").innerHTML = expenses.length ? expenses.map(expense => `
    <tr>
      <td>${escapeHtml(expense.plateNumber)}</td>
      <td>${escapeHtml(expense.driverName)}</td>
      <td>${escapeHtml(expense.nationalId)}</td>
      <td>${escapeHtml(expense.declarationNumber)} · ${escapeHtml(expense.containerNumber)}</td>
      <td>${formatCurrency(expense.amount)}</td>
      <td>${translateText(EXPENSE_TYPE_LABELS[expense.type] || "—")}</td>
      <td>${escapeHtml(expense.notes || "—")}</td>
      <td>${renderAttachmentLinks(expense.attachments, "مرفقات التكلفة") || "—"}</td>
      <td>${formatDateTime(expense.createdAt)}</td>
      <td>${canManageExpenses ? `<div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-trip-expense" data-id="${escapeHtml(expense.id)}" aria-label="${editLabel} ${expenseLabel} ${escapeHtml(expense.driverName)}">${editLabel}</button><button class="delete-button" type="button" data-action="delete-trip-expense" data-id="${escapeHtml(expense.id)}" aria-label="${deleteLabel} ${expenseLabel} ${escapeHtml(expense.driverName)}">${deleteLabel}</button></div>` : "—"}</td>
    </tr>`).join("") : `<tr><td colspan="10" class="empty-row">${translateText("لا توجد تكاليف مسجلة.")}</td></tr>`;
}

function beginTripExpenseEdit(id) {
  const expense = (state.tripExpenses || []).find(item => item.id === id);
  if (!expense) return showToast("السجل المطلوب غير موجود.", true);

  editingTripExpenseId = expense.id;
  $("#expense-edit-amount").value = expense.amount;
  $("#expense-edit-type").value = expense.type;
  $("#expense-edit-notes").value = expense.notes || "";
  $("#expense-edit-attachments").value = "";
  $("#expense-edit-wrap").classList.remove("hidden");
  $("#expense-edit-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelTripExpenseEdit() {
  editingTripExpenseId = null;
  $("#expense-edit-form").reset();
  $("#expense-edit-wrap").classList.add("hidden");
}

async function deleteTripExpense(id) {
  const expense = (state.tripExpenses || []).find(item => item.id === id);
  if (!expense) return showToast("السجل المطلوب غير موجود.", true);
  if (!window.confirm(
    `${translateText("هل تريد حذف تكلفة الرحلة للسائق ")}${expense.driverName}${translateText("؟ لا يمكن التراجع عن هذا الإجراء.")}`
  )) return;

  try {
    await apiRequest(`/api/trip-expenses/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTripExpenseId === id) cancelTripExpenseEdit();
    await refreshServerState();
    showToast("تم حذف تكلفة الرحلة ومرفقاتها.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const separator = result.indexOf(",");
      if (separator < 0) return reject(new Error("تعذر قراءة ملف Excel. ارفع ملفاً صالحاً بصيغة .xlsx."));
      resolve(result.slice(separator + 1));
    };
    reader.onerror = () => reject(reader.error || new Error("تعذر قراءة ملف Excel. ارفع ملفاً صالحاً بصيغة .xlsx."));
    reader.readAsDataURL(file);
  });
}

async function importSpreadsheet(type, input) {
  const file = input.files?.[0];
  if (!file) return;
  const importButton = $(`#import-${type}-button`);
  if (!file.name.toLowerCase().endsWith(".xlsx")) {
    input.value = "";
    return showToast("اختر ملف Excel بصيغة .xlsx.", true);
  }
  if (file.size > 3 * 1024 * 1024) {
    input.value = "";
    return showToast("حجم ملف Excel يجب ألا يتجاوز 3 MB.", true);
  }
  importButton.disabled = true;
  try {
    showToast("جارٍ استيراد البيانات...");
    const data = await readFileAsBase64(file);
    const result = await apiRequest(`/api/${type}/import`, {
      method: "POST",
      body: { fileName: file.name, data }
    });
    await refreshServerState();
    showToast(type === "drivers"
      ? `تم استيراد ${result.imported} سائقاً بنجاح.`
      : `تم استيراد ${result.imported} سيارة بنجاح.`);
  } catch (error) {
    showToast(error.message, true);
  } finally {
    input.value = "";
    importButton.disabled = false;
  }
}

async function downloadImportTemplate(type) {
  try {
    const response = await fetch(`/api/import-templates/${type}`, { credentials: "same-origin" });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(API_ERRORS[payload.error] || `تعذر تنزيل النموذج (${response.status}).`);
    }
    const url = URL.createObjectURL(await response.blob());
    const link = document.createElement("a");
    link.href = url;
    link.download = `north-world-${type}-template.xlsx`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("تم تنزيل نموذج Excel.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function sortArchiveDocs(docs) {
  const direction = $("#archive-sort").value === "newest" ? -1 : 1;
  return [...docs].sort((a, b) =>
    direction * String(a.issuedAt || "").localeCompare(String(b.issuedAt || "")) ||
    String(a.tripId).localeCompare(String(b.tripId))
  );
}

function getFilteredArchiveDocs(query = "") {
  const term = String(query || "").trim().toLowerCase();
  const from = $("#archive-from").value;
  const to = $("#archive-to").value;
  const customer = $("#archive-customer").value.trim().toLowerCase();
  return sortArchiveDocs(state.docs.filter(doc => {
    const operationDate = String(doc.issuedAt || "").slice(0, 10);
    if ((from && operationDate < from) || (to && operationDate > to)) return false;
    if (customer && !String(doc.customerName || "").toLowerCase().includes(customer)) return false;
    const truck = truckForTrip(doc);
    return [doc.documentNumber, doc.declarationNumber, doc.containerNumber, truck?.plateNumber, doc.customerName]
      .some(value => String(value || "").toLowerCase().includes(term));
  }));
}

function updateArchiveSelectionControls(matches = getFilteredArchiveDocs($("#archive-query").value)) {
  const selectedVisible = matches.filter(doc => selectedArchiveTripIds.has(doc.tripId)).length;
  const selectAll = $("#archive-select-all");
  selectAll.checked = matches.length > 0 && selectedVisible === matches.length;
  selectAll.indeterminate = selectedVisible > 0 && selectedVisible < matches.length;
  selectAll.disabled = matches.length === 0;
  $("#archive-selection-count").textContent =
    `${selectedArchiveTripIds.size} ${translateText("عملية محددة")}`;
  $("#archive-export-pdf").disabled = selectedArchiveTripIds.size === 0;
}

function renderArchive(query = "") {
  const term = String(query || "").trim();
  const availableTripIds = new Set(state.docs.map(doc => doc.tripId));
  for (const tripId of selectedArchiveTripIds) {
    if (!availableTripIds.has(tripId)) selectedArchiveTripIds.delete(tripId);
  }
  const matches = getFilteredArchiveDocs(query);
  $("#archive-count").textContent = `${matches.length} وثيقة`;
  updateArchiveSelectionControls(matches);
  const container = $("#archive-results");
  if (!matches.length) {
    container.innerHTML = `<div class="panel empty-state"><span>▣</span><strong>${term ? "لا توجد وثائق مطابقة" : "الأرشيف فارغ"}</strong><p>${term ? "جرّب البحث برقم مختلف." : "ستظهر الوثائق هنا بعد إصدارها."}</p></div>`;
    return;
  }
  container.innerHTML = matches.map(doc => {
    const truck = truckForTrip(doc);
    const driver = driverById(doc.driverId);
    const status = documentStatus(doc);
    return `<article class="archive-card">
      <label class="archive-select-cell"><input type="checkbox" data-archive-select data-id="${escapeHtml(doc.tripId)}" ${selectedArchiveTripIds.has(doc.tripId) ? "checked" : ""} aria-label="${translateText("تحديد العملية")} ${escapeHtml(documentLabel(doc))}"></label>
      <div><h3>${escapeHtml(documentLabel(doc))}</h3><p>تاريخ الإصدار: ${doc.status === "DRAFT" ? "لم يصدر بعد" : formatDate(doc.issuedAt)}</p></div>
      <div><span class="status-pill ${status.className}">${status.text}</span><p>${escapeHtml(doc.declarationNumber)}</p></div>
      <div class="archive-meta">الحاوية: ${escapeHtml(doc.containerNumber)} · اللوحة: ${escapeHtml(truck?.plateNumber || "—")}<br>العميل: ${escapeHtml(doc.customerName)} · السائق: ${escapeHtml(driver?.name || "—")}${renderAttachmentLinks(doc.attachments, "مرفقات وثيقة النقل")}</div>
      <div class="archive-actions"><button class="button button-secondary" data-action="pdf" data-id="${escapeHtml(doc.id)}">عرض / PDF</button>${doc.returnedAt || doc.cancelledAt ? "" : `<label class="eir-field">رقم إيصال EIR (اختياري)<input type="text" data-return-eir autocomplete="off"></label>`}${doc.cancelledAt ? `<span class="status-pill status-maintenance">${translateText("الملغاة")}</span>` : `<button class="button button-light" data-action="return" data-id="${escapeHtml(doc.id)}" ${doc.returnedAt ? "disabled" : ""}>تسجيل الإعادة</button>`}</div>
    </article>`;
  }).join("");
}

async function exportSelectedArchivePdf() {
  const selectedTrips = sortArchiveDocs(
    state.docs.filter(doc => selectedArchiveTripIds.has(doc.tripId))
  );
  if (!selectedTrips.length) return showToast("اختر عملية واحدة على الأقل لتصدير PDF.", true);

  const button = $("#archive-export-pdf");
  button.disabled = true;
  button.textContent = translateText("جارٍ تجهيز ملف PDF الموحد...");
  try {
    const response = await fetch("/api/archive/merge-pdf", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tripIds: selectedTrips.map(doc => doc.tripId),
        source: $("#archive-pdf-type").value
      })
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(translateText(API_ERRORS[payload.error] || `تعذر تصدير PDF (${response.status}).`));
    }

    const url = URL.createObjectURL(await response.blob());
    const link = document.createElement("a");
    link.href = url;
    link.download = `north-world-archive-${dateOnly()}.pdf`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("تم دمج ملفات PDF المحددة وتنزيلها.");
  } catch (error) {
    showToast(error.message, true);
  } finally {
    button.textContent = translateText("تصدير PDF للعمليات المحددة");
    updateArchiveSelectionControls();
  }
}

function renderTripTracking() {
  const acceptedTrips = state.docs.filter(doc => Boolean(doc.acceptedAt));
  const activeTrips = acceptedTrips.filter(doc => !doc.returnedAt && !doc.cancelledAt);
  const completedTrips = acceptedTrips.filter(doc => Boolean(doc.returnedAt) && !doc.cancelledAt);
  const cancelledTrips = acceptedTrips.filter(doc => Boolean(doc.cancelledAt));
  $("#tracking-active-count").textContent = activeTrips.length;
  $("#tracking-completed-count").textContent = completedTrips.length;
  $("#tracking-cancelled-count").textContent = cancelledTrips.length;
  $("#tracking-last-updated").textContent = formatDateTime(trackingLastUpdatedAt);

  const statusFilter = $("#tracking-filter").value;
  const query = $("#tracking-query").value.trim().toLocaleLowerCase();
  const trips = acceptedTrips.filter(doc => {
    if (statusFilter === "active" && (doc.returnedAt || doc.cancelledAt)) return false;
    if (statusFilter === "completed" && (!doc.returnedAt || doc.cancelledAt)) return false;
    if (statusFilter === "cancelled" && !doc.cancelledAt) return false;
    const driver = driverById(doc.driverId);
    const truck = truckForTrip(doc);
    const searchable = [
      doc.documentNumber, doc.declarationNumber, doc.containerNumber,
      doc.customerName, doc.port, doc.destination, driver?.name,
      driver?.phone, truck?.plateNumber, truck?.fleetNumber
    ];
    return !query || searchable.some(value => String(value || "").toLocaleLowerCase().includes(query));
  }).sort((a, b) => {
    const aUpdatedAt = a.cancelledAt || a.stageHistory?.[a.stageHistory.length - 1]?.completedAt || a.acceptedAt;
    const bUpdatedAt = b.cancelledAt || b.stageHistory?.[b.stageHistory.length - 1]?.completedAt || b.acceptedAt;
    return String(bUpdatedAt).localeCompare(String(aUpdatedAt));
  });

  const container = $("#tracking-list");
  if (!trips.length) {
    container.innerHTML = translateText(`<div class="panel empty-state"><span>⌖</span><strong>لا توجد رحلات مقبولة تطابق البحث أو الفلتر.</strong></div>`);
    return;
  }

  container.innerHTML = trips.map(doc => {
    const driver = driverById(doc.driverId);
    const truck = truckForTrip(doc);
    const stageHistory = new Map((doc.stageHistory || []).map(update => [update.stage, update.completedAt]));
    const currentStageIndex = Number.isInteger(doc.tripStageIndex)
      ? Math.max(0, Math.min(doc.tripStageIndex, TRIP_STAGES.length - 1))
      : 0;
    const completed = Boolean(doc.returnedAt);
    const cancelled = Boolean(doc.cancelledAt);
    const active = !completed && !cancelled;
    const currentStage = TRIP_STAGES[currentStageIndex];
    const lastUpdate = doc.cancelledAt || doc.stageHistory?.[doc.stageHistory.length - 1]?.completedAt || doc.acceptedAt;
    const timeline = TRIP_STAGES.map((stage, index) => {
      const done = completed || index < currentStageIndex;
      const current = active && index === currentStageIndex;
      const enteredAt = index === 0
        ? doc.acceptedAt
        : stageHistory.get(TRIP_STAGES[index - 1].key);
      const timestamp = done ? stageHistory.get(stage.key) : current ? enteredAt : null;
      const marker = done ? "✓" : index + 1;
      return `<div class="tracking-stage ${done ? "done" : current ? "current" : ""}">
        <span class="tracking-stage-dot">${marker}</span>
        <span class="tracking-stage-label">${stage.label}</span>
        ${timestamp ? `<small>${formatDateTime(timestamp)}</small>` : ""}
      </div>`;
    }).join("");

    return `<article class="tracking-card">
      <div class="tracking-card-heading">
        <div><h2>${escapeHtml(doc.documentNumber || doc.declarationNumber)}</h2><p>البيان: ${escapeHtml(doc.declarationNumber)} · الحاوية: ${escapeHtml(doc.containerNumber)}</p></div>
        <span class="status-pill ${cancelled ? "status-maintenance" : completed ? "status-issued" : "status-on-trip"}">${cancelled ? translateText("الملغاة") : translateText(completed ? "مكتملة" : "قيد التنفيذ")}</span>
      </div>
      <div class="tracking-details">
        <div><small>السائق</small><strong>${escapeHtml(driver?.name || "—")}${driver?.phone ? ` · ${escapeHtml(driver.phone)}` : ""}</strong></div>
        <div><small>الشاحنة / رقم الأسطول</small><strong>${escapeHtml(truck?.plateNumber || "—")} · ${escapeHtml(truck?.fleetNumber || "—")}</strong></div>
        <div><small>المسار</small><strong>من: ${escapeHtml(doc.port)} · إلى: ${escapeHtml(doc.destination)}</strong></div>
        <div><small>قُبل الطلب في</small><strong>${formatDateTime(doc.acceptedAt)}</strong></div>
        <div><small>المرحلة الحالية</small><strong>${cancelled ? translateText("ألغيت الرحلة") : completed ? "تم إعادة الفارغ" : currentStage.label}</strong></div>
        <div><small>آخر تحديث</small><strong>${formatDateTime(lastUpdate)}</strong></div>
      </div>
      <div class="tracking-timeline-wrap"><div class="tracking-timeline">${timeline}</div></div>
      ${currentAccount?.role === "ADMIN" ? `
        <div class="driver-trip-actions tracking-actions">
          ${active ? `<label class="eir-field">رقم إيصال التسليم EIR (اختياري)<input type="text" data-tracking-eir autocomplete="off"></label>` : ""}
          <button class="button button-primary" type="button" data-action="complete-tracked-trip" data-id="${escapeHtml(doc.id)}" ${active ? "" : `disabled title="${translateText("لا يمكن إتمام رحلة مكتملة أو ملغاة.")}"`}>${translateText("إتمام الرحلة")}</button>
          <button class="button button-danger" type="button" data-action="cancel-tracked-trip" data-id="${escapeHtml(doc.tripId)}" ${!active || doc.invoiceId || doc.billingStatus !== "UNBILLED" ? `disabled title="${translateText("لا يمكن إلغاء رحلة غير نشطة أو مرتبطة بفاتورة.")}"` : ""}>${translateText("إلغاء الرحلة")}</button>
        </div>
      ` : ""}
    </article>`;
  }).join("");
}

async function refreshTracking(showConfirmation = false) {
  if (trackingRefreshInFlight) return;
  trackingRefreshInFlight = true;
  const button = $("#refresh-tracking");
  button.disabled = true;
  try {
    await refreshServerState();
    if (showConfirmation) showToast("تم تحديث تتبع الرحلات.");
  } catch (error) {
    showToast(error.message, true);
  } finally {
    trackingRefreshInFlight = false;
    button.disabled = false;
  }
}

function populatePortFilter() {
  const select = $("#filter-port");
  const selectedPort = select.value;
  select.innerHTML = `<option value="">كل الموانئ</option>` + state.ports
    .map(port => `<option value="${escapeHtml(port.name)}">${escapeHtml(port.name)}</option>`)
    .join("");
  if (state.ports.some(port => port.name === selectedPort)) select.value = selectedPort;
}

function filteredDocs() {
  const from = $("#filter-from").value;
  const to = $("#filter-to").value;
  const port = $("#filter-port").value;
  const customer = $("#filter-customer").value.trim().toLowerCase();
  const status = $("#filter-return").value;
  return [...state.docs].filter(doc => {
    if (doc.cancelledAt) return false;
    return (!from || doc.issuedAt >= from) &&
      (!to || doc.issuedAt <= to) &&
      (!port || doc.port === port) &&
      (!customer || doc.customerName.toLowerCase().includes(customer)) &&
      (!status || returnState(doc) === status);
  }).sort((a, b) => b.issuedAt.localeCompare(a.issuedAt));
}

function renderReports() {
  populatePortFilter();
  const docs = filteredDocs();
  $("#report-count").textContent = `${docs.length} عملية`;
  $("#report-empty").classList.toggle("hidden", docs.length > 0);
  $("#report-rows").innerHTML = docs.map(doc => {
    const truck = truckForTrip(doc);
    const driver = driverById(doc.driverId);
    const returned = returnLabel(doc);
    const status = documentStatus(doc);
    return `<tr>
      <td>العملية: ${formatDate(doc.issuedAt)}<br>الفسح: ${formatDate(clearanceById(doc.clearanceId)?.clearedAt)}</td>
      <td>${escapeHtml(doc.customerName)}</td>
      <td>${escapeHtml(driver?.name || "—")}<br>${escapeHtml(driver?.nationalId || "—")}<br>${escapeHtml(driver?.phone || "—")}</td>
      <td><span class="doc-number">${escapeHtml(doc.documentNumber)}</span><br><span class="status-pill ${status.className}">${status.text}</span></td>
      <td>${escapeHtml(truck?.plateNumber || "—")}<br>رقم الأسطول: ${escapeHtml(truck?.fleetNumber || "—")}</td>
      <td>${escapeHtml(doc.containerNumber)}<br>${escapeHtml(doc.size)} · ${CONTAINER_TYPES[doc.type] || "أخرى"}<br>الرصاص: ${escapeHtml(doc.sealNumber || "—")}<br>البيان: ${escapeHtml(doc.declarationNumber)}</td>
      <td>من: ${escapeHtml(doc.port)}<br>إلى: ${escapeHtml(doc.destination)}</td>
      <td class="${returned.className}">${returned.text}<br>إيصال EIR: ${escapeHtml(doc.eir || "—")}<br>المهلة المجانية: ${formatDate(doc.freeTimeEndsAt)}</td>
    </tr>`;
  }).join("");
}

function updateAccountRoleFields() {
  const isDriver = $("#account-role").value === "DRIVER";
  const field = $("#account-driver-field");
  const select = $("#account-driver");
  const selectedDriverId = select.value;
  field.classList.toggle("hidden", !isDriver);
  select.required = isDriver;
  const availableDrivers = state.drivers.filter(driver =>
    !driver.deletedAt && driver.isActive &&
    !state.accounts.some(account => account.id !== editingAccountId && account.role === "DRIVER" && account.driverId === driver.id && !account.deletedAt)
  );
  select.innerHTML = `<option value="">اختر السائق</option>` + availableDrivers
    .map(driver => `<option value="${escapeHtml(driver.id)}">${escapeHtml(driver.name)}</option>`)
    .join("");
  if (availableDrivers.some(driver => driver.id === selectedDriverId)) select.value = selectedDriverId;
}

function renderAccounts() {
  const accounts = state.accounts.filter(account => !account.deletedAt);
  $("#account-count").textContent = `${accounts.length} حساب`;
  $("#account-rows").innerHTML = accounts.length ? accounts.map(account => {
    const driver = account.role === "DRIVER" ? driverById(account.driverId) : null;
    return `<tr>
      <td>${escapeHtml(account.username)}</td>
      <td><span class="status-pill ${account.role === "ADMIN" ? "status-issued" : "status-neutral"}">${account.role === "ADMIN" ? "أدمن" : "سائق"}</span></td>
      <td>${escapeHtml(driver?.name || (account.role === "ADMIN" ? "—" : "سجل غير مرتبط"))}</td>
      <td>${formatDate(account.createdAt?.slice(0, 10))}</td>
      <td><button class="edit-account-button" type="button" data-action="edit-account" data-id="${escapeHtml(account.id)}" aria-label="تعديل حساب ${escapeHtml(account.username)}">تعديل</button></td>
    </tr>`;
  }).join("") : `<tr><td colspan="5" class="empty-row">لا توجد حسابات مستخدمين.</td></tr>`;
  updateAccountRoleFields();
}

function setAccountFormMode(isEditing) {
  const password = $("#account-form").elements.password;
  const passwordConfirm = $("#account-form").elements.passwordConfirm;
  $("#account-form-title").textContent = isEditing ? "تعديل حساب" : "إضافة حساب";
  $("#account-submit-button").textContent = isEditing ? "حفظ التعديلات" : "إنشاء الحساب";
  $("#account-form-actions").classList.toggle("editing", isEditing);
  $("#cancel-account-edit").classList.toggle("hidden", !isEditing);
  $("#account-password-title").textContent = isEditing ? "كلمة مرور جديدة (اختياري)" : "كلمة المرور";
  $("#account-password-confirm-title").textContent = isEditing ? "تأكيد كلمة المرور الجديدة" : "تأكيد كلمة المرور";
  password.required = !isEditing;
  passwordConfirm.required = !isEditing;
  password.minLength = isEditing ? 0 : 12;
  passwordConfirm.minLength = isEditing ? 0 : 12;
  password.placeholder = isEditing ? "اتركها فارغة للإبقاء على الحالية" : "١٢ حرفاً على الأقل";
  passwordConfirm.placeholder = isEditing ? "أعد كتابة كلمة المرور الجديدة" : "أعد كتابة كلمة المرور";
}

function beginAccountEdit(id) {
  const account = state.accounts.find(item => item.id === id && !item.deletedAt);
  if (!account) return showToast("تعذر العثور على الحساب المطلوب.", true);
  const form = $("#account-form");
  editingAccountId = account.id;
  form.reset();
  form.elements.username.value = account.username;
  $("#account-role").value = account.role;
  setAccountFormMode(true);
  updateAccountRoleFields();
  $("#account-driver").value = account.driverId || "";
  $("#account-form-title").scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelAccountEdit() {
  editingAccountId = null;
  $("#account-form").reset();
  setAccountFormMode(false);
  renderAccounts();
}

async function handleAccountSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const editingAccount = editingAccountId ? state.accounts.find(account => account.id === editingAccountId && !account.deletedAt) : null;
  if (editingAccountId && !editingAccount) {
    cancelAccountEdit();
    return showToast("لم يعد الحساب المحدد متاحاً للتعديل.", true);
  }
  const username = normalizedUsername(values.username);
  if (username.length < 3) return showToast("اسم المستخدم يجب أن يتكون من ٣ أحرف على الأقل.", true);
  if (state.accounts.some(account => account.id !== editingAccount?.id && normalizedUsername(account.username) === username && !account.deletedAt)) {
    return showToast("اسم المستخدم مستخدم بالفعل.", true);
  }
  const changingPassword = Boolean(values.password || values.passwordConfirm);
  if ((!editingAccount || changingPassword) && values.password.length < 12) return showToast("كلمة المرور يجب ألا تقل عن ١٢ حرفاً.", true);
  if (changingPassword && values.password !== values.passwordConfirm) return showToast("كلمتا المرور غير متطابقتين.", true);
  const role = values.role;
  if (!["ADMIN", "DRIVER"].includes(role)) return showToast("نوع الحساب المحدد غير صحيح.", true);
  if (editingAccount?.role === "ADMIN" && role !== "ADMIN" && state.accounts.filter(account => account.role === "ADMIN" && !account.deletedAt).length <= 1) {
    return showToast("لا يمكن تغيير نوع حساب آخر أدمن في النظام.", true);
  }
  const driver = role === "DRIVER" ? driverById(values.driverId) : null;
  if (role === "DRIVER" && (!driver || driver.deletedAt || !driver.isActive)) {
    return showToast("اختر سجلاً نشطاً لسائق لا يملك حساباً بعد.", true);
  }
  if (role === "DRIVER" && state.accounts.some(account => account.id !== editingAccount?.id && account.role === "DRIVER" && account.driverId === driver.id && !account.deletedAt)) {
    return showToast("لدى هذا السائق حساب مستخدم بالفعل.", true);
  }
  try {
    if (editingAccount) {
      const wasCurrentUser = currentAccount?.id === editingAccount.id;
      await apiRequest(`/api/accounts/${encodeURIComponent(editingAccount.id)}`, {
        method: "PATCH",
        body: {
          username,
          role,
          driverId: role === "DRIVER" ? driver.id : "",
          ...(changingPassword ? { password: values.password } : {})
        }
      });
      editingAccountId = null;
      form.reset();
      setAccountFormMode(false);
      if (wasCurrentUser) {
        await logout();
        showAuthMessage("تم تحديث الحساب. سجّل الدخول مجدداً.");
        return;
      }
      await refreshServerState();
      showToast("تم حفظ تعديلات الحساب.");
      return;
    }
    await apiRequest("/api/accounts", {
      method: "POST",
      body: { username, password: values.password, role, driverId: driver?.id || "" }
    });
    form.reset();
    setAccountFormMode(false);
    await refreshServerState();
    showToast("تم إنشاء الحساب. شارك اسم المستخدم وكلمة المرور مع صاحبه بشكل آمن.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function renderDriverExpenses(driver) {
  const acceptedTrips = state.docs.filter(doc => doc.driverId === driver.id && doc.acceptedAt && !doc.cancelledAt);
  const select = $("#driver-expense-trip");
  const selectedTripId = select.value;
  select.innerHTML = `<option value="">${translateText("اختر الرحلة")}</option>` + acceptedTrips.map(doc => `
    <option value="${escapeHtml(doc.tripId)}">${escapeHtml(doc.declarationNumber)} — ${escapeHtml(doc.containerNumber)} (${escapeHtml(doc.port)})</option>
  `).join("");
  if (acceptedTrips.some(doc => doc.tripId === selectedTripId)) select.value = selectedTripId;
  select.disabled = acceptedTrips.length === 0;
  $("#driver-expense-submit").disabled = acceptedTrips.length === 0;
  $("#driver-expense-trip-hint").textContent = translateText(
    acceptedTrips.length ? "تظهر الرحلات بعد قبولها." : "لا توجد رحلات مقبولة لإضافة تكلفة."
  );

  const expenses = (state.tripExpenses || []).filter(expense => expense.driverId === driver.id);
  $("#driver-expense-rows").innerHTML = expenses.length ? expenses.map(expense => `
    <tr>
      <td>${escapeHtml(expense.declarationNumber)} · ${escapeHtml(expense.containerNumber)}</td>
      <td>${formatCurrency(expense.amount)}</td>
      <td>${translateText(EXPENSE_TYPE_LABELS[expense.type] || "—")}</td>
      <td>${escapeHtml(expense.notes || "—")}</td>
      <td>${renderAttachmentLinks(expense.attachments, "مرفقات التكلفة") || "—"}</td>
      <td>${formatDateTime(expense.createdAt)}</td>
    </tr>`).join("") : `<tr><td colspan="6" class="empty-row">${translateText("لا توجد تكاليف مسجلة.")}</td></tr>`;
}

function renderDriverDashboard() {
  if (currentAccount?.role !== "DRIVER") return;
  const driver = driverById(currentAccount.driverId);
  if (!driver || driver.deletedAt || !driver.isActive) return logout();
  const docs = state.docs.filter(doc => doc.driverId === driver.id).sort((a, b) => b.issuedAt.localeCompare(a.issuedAt));
  const requests = docs.filter(doc => doc.requestStatus === "PENDING");
  const trips = docs.filter(doc => doc.requestStatus === "ACCEPTED");
  const activeDocs = trips.filter(doc => !doc.returnedAt);
  renderDriverExpenses(driver);
  $("#driver-stat-total").textContent = docs.length;
  $("#driver-stat-active").textContent = activeDocs.length;
  $("#driver-stat-complete").textContent = trips.length - activeDocs.length;
  $("#driver-request-count").textContent = requests.length;
  $("#driver-request-list").innerHTML = requests.length ? requests.map(doc => {
    const truck = truckForTrip(doc);
    return `<article class="driver-request-card">
      <div class="driver-request-head"><div><h2>${escapeHtml(documentLabel(doc))}</h2><p>طلب جديد من الإدارة · بانتظار قبولك</p></div><span class="status-pill status-pending">بانتظار القبول</span></div>
      <div class="driver-request-details">
        <div><span>العميل</span><strong>${escapeHtml(doc.customerName)}</strong></div>
        <div><span>الحاوية والمقاس</span><strong>${escapeHtml(doc.containerNumber)} · ${escapeHtml(doc.size)}</strong></div>
        <div><span>الشاحنة</span><strong>${escapeHtml(truck?.plateNumber || "—")} · ${escapeHtml(truck?.fleetNumber || "—")}</strong></div>
        <div><span>الميناء ووجهة التسليم</span><strong>${language === "ar" ? `من: ${escapeHtml(doc.port)} إلى: ${escapeHtml(doc.destination)}` : `From: ${escapeHtml(doc.port)} → To: ${escapeHtml(doc.destination)}`}</strong></div>
        <div><span>موعد إعادة الحاوية</span><strong>${formatDate(doc.returnDueAt)}</strong></div>
        <div><span>تاريخ الرحلة</span><strong>${formatDate(doc.issuedAt)}</strong></div>
      </div>
      ${renderAttachmentLinks(doc.clearanceAttachments, "مرفقات الفسح")}
      ${renderAttachmentLinks(doc.attachments, "مرفقات وثيقة النقل")}
      <div class="driver-trip-actions"><span class="form-note">راجع تفاصيل الرحلة قبل القبول.</span><button class="button button-primary" type="button" data-action="accept-trip" data-id="${escapeHtml(doc.id)}">قبول الطلب وبدء الرحلة</button></div>
    </article>`;
  }).join("") : `<div class="driver-empty-state"><strong>لا توجد طلبات جديدة حالياً.</strong><p>ستظهر هنا الرحلات التي يعيّنها لك مدير النظام.</p></div>`;

  $("#driver-trip-list").innerHTML = trips.length ? trips.map(doc => {
    const truck = truckForTrip(doc);
    const currentStage = Math.max(0, Math.min(doc.tripStageIndex, TRIP_STAGES.length - 1));
    const timeline = TRIP_STAGES.map((stage, index) => {
      const stateClass = index < currentStage ? "done" : index === currentStage ? "current" : "";
      const marker = index < currentStage ? "✓" : index + 1;
      return `<div class="driver-timeline-step ${stateClass}"><span class="driver-timeline-dot">${marker}</span><span class="driver-timeline-label">${stage.label}</span></div>`;
    }).join("");
    const nextStage = TRIP_STAGES[currentStage];
    return `<article class="driver-trip-card">
      <div class="driver-trip-head"><div><h3>${escapeHtml(documentLabel(doc))}</h3><p>${doc.returnedAt ? "الرحلة مكتملة" : `المرحلة الحالية: ${nextStage.label}`}</p></div><span class="status-pill ${doc.returnedAt ? "status-issued" : "status-on-trip"}">${doc.returnedAt ? "مكتملة" : "قيد التنفيذ"}</span></div>
      <div class="driver-request-details">
        <div><span>العميل</span><strong>${escapeHtml(doc.customerName)}</strong></div>
        <div><span>الحاوية والمقاس</span><strong>${escapeHtml(doc.containerNumber)} · ${escapeHtml(doc.size)} · ${CONTAINER_TYPES[doc.type] || "أخرى"}</strong></div>
        <div><span>الشاحنة</span><strong>${escapeHtml(truck?.plateNumber || "—")}</strong></div>
        <div><span>الميناء</span><strong>${escapeHtml(doc.port)}</strong></div>
        <div><span>وجهة العميل</span><strong>${escapeHtml(doc.destination)}</strong></div>
        <div><span>موعد إعادة الحاوية</span><strong>${formatDate(doc.returnDueAt)}</strong></div>
      </div>
      ${renderAttachmentLinks(doc.clearanceAttachments, "مرفقات الفسح")}
      ${renderAttachmentLinks(doc.attachments, "مرفقات وثيقة النقل")}
      <div class="driver-timeline-wrap"><div class="driver-timeline">${timeline}</div></div>
      <div class="driver-trip-actions">
        <button class="button button-light" type="button" data-action="pdf" data-id="${escapeHtml(doc.id)}">عرض / PDF</button>
        ${doc.returnedAt
          ? `<span class="status-pill status-issued">الرحلة مكتملة${doc.eir ? ` · EIR: ${escapeHtml(doc.eir)}` : ""}</span>`
          : currentStage === TRIP_STAGES.length - 2
            ? `<label class="eir-field">رقم إيصال التسليم EIR (اختياري)<input type="text" data-eir-value autocomplete="off"></label><button class="button button-primary" type="button" data-action="complete-trip" data-id="${escapeHtml(doc.id)}">${nextStage.action}</button>`
            : `<button class="button button-primary" type="button" data-action="advance-trip" data-id="${escapeHtml(doc.id)}">${nextStage.action}</button>`}
      </div>
    </article>`;
  }).join("") : `<div class="driver-empty-state"><strong>لا توجد رحلات مرتبطة بحسابك حالياً.</strong><p>بعد قبول الطلب ستظهر مراحل الرحلة هنا.</p></div>`;
  showDriverTab(activeDriverTab);
}

async function acceptDriverTrip(id) {
  const doc = state.docs.find(item => item.id === id);
  if (!doc || currentAccount?.role !== "DRIVER" || doc.driverId !== currentAccount.driverId || doc.requestStatus !== "PENDING") {
    return showToast("لا يمكن قبول طلب غير مخصص لحسابك.", true);
  }
  try {
    await apiRequest(`/api/trips/${encodeURIComponent(doc.tripId)}/accept`, { method: "POST" });
    activeDriverTab = "trips";
    await refreshServerState();
    showToast("تم قبول الرحلة. ابدأ التوجه إلى الميناء.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function advanceDriverTrip(id, eirValue = "") {
  const doc = state.docs.find(item => item.id === id);
  if (!doc || currentAccount?.role !== "DRIVER" || doc.driverId !== currentAccount.driverId || doc.requestStatus !== "ACCEPTED" || doc.returnedAt) {
    return showToast("لا يمكن تحديث مرحلة هذه الرحلة.", true);
  }
  const currentStage = Number.isInteger(doc.tripStageIndex) ? doc.tripStageIndex : 0;
  if (currentStage < 0 || currentStage >= TRIP_STAGES.length - 1) return showToast("لا يمكن تحديث مرحلة هذه الرحلة.", true);
  try {
    await apiRequest(`/api/trips/${encodeURIComponent(doc.tripId)}/advance`, {
      method: "POST",
      body: { eir: String(eirValue).trim() }
    });
    await refreshServerState();
    showToast(currentStage === TRIP_STAGES.length - 2
      ? "تم تسجيل إعادة الفارغ وإكمال الرحلة."
      : "تم تحديث مرحلة الرحلة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function extractTransportDocumentReference(input) {
  const requestId = ++transportReferenceExtractionSequence;
  const status = $("#transport-document-extraction-status");
  const selectedFiles = Array.from(input.files || []);
  const pdfFiles = selectedFiles.filter(file =>
    file.type === "application/pdf" || /\.pdf$/i.test(file.name)
  );
  if (!pdfFiles.length) {
    transportReferenceExtractionInFlight = false;
    status.classList.add("hidden");
    status.textContent = "";
    return;
  }

  const numberInput = $("#issue-manual-document-number");
  const dateInput = $("#issue-manual-document-date");
  const originalNumber = numberInput.value;
  const originalDate = dateInput.value;
  transportReferenceExtractionInFlight = true;
  status.textContent = translateText("جارٍ قراءة مستند النقل واستخراج المرجع...");
  status.classList.remove("hidden");
  try {
    const attachments = await encodeSelectedAttachments(input);
    if (requestId !== transportReferenceExtractionSequence) return;

    let extractedReference = null;
    let partialReference = null;
    let lastError = null;
    let completedPreview = false;
    for (const file of attachments.filter(attachment => attachment.type === "application/pdf")) {
      try {
        const reference = await apiRequest("/api/trips/document-reference/preview", {
          method: "POST",
          body: { fileName: file.name, data: file.data }
        });
        completedPreview = true;
        if (reference.documentNumber && reference.documentDate) {
          extractedReference = reference;
          break;
        }
        if ((reference.documentNumber || reference.documentDate) && !partialReference) {
          partialReference = reference;
        }
      } catch (error) {
        lastError = error;
      }
      if (requestId !== transportReferenceExtractionSequence) return;
    }

    const reference = extractedReference || partialReference;
    if (!reference) {
      const message = lastError && !completedPreview
        ? lastError.message
        : "لم يتم العثور على رقم الوثيقة أو تاريخها في ملفات PDF. أدخلهما يدوياً.";
      status.textContent = translateText(message);
      showToast(message, true);
      return;
    }

    if (reference.documentNumber && numberInput.value === originalNumber) {
      numberInput.value = reference.documentNumber;
    }
    if (reference.documentDate && dateInput.value === originalDate) {
      dateInput.value = reference.documentDate;
    }

    const complete = Boolean(reference.documentNumber && reference.documentDate);
    const message = complete
      ? "تم استخراج رقم الوثيقة وتاريخها من PDF. راجعهما قبل الحفظ."
      : "تم استخراج جزء من مرجع الوثيقة. أكمل الخانة الناقصة يدوياً.";
    status.textContent = translateText(message);
    showToast(message, !complete);
  } catch (error) {
    if (requestId !== transportReferenceExtractionSequence) return;
    status.textContent = translateText(error.message);
    showToast(error.message, true);
  } finally {
    if (requestId === transportReferenceExtractionSequence) {
      transportReferenceExtractionInFlight = false;
    }
  }
}

async function issueDocument(event) {
  event.preventDefault();
  if (transportReferenceExtractionInFlight) {
    return showToast("انتظر انتهاء قراءة PDF قبل حفظ الرحلة.", true);
  }
  const clearance = clearanceById($("#issue-clearance").value);
  const truck = truckById($("#issue-truck").value);
  const driver = driverById($("#issue-driver").value);
  const customerName = $("#issue-customer").value.trim();
  const destination = $("#issue-destination").value.trim();
  const manualDocumentNumber = $("#issue-manual-document-number").value.trim();
  const manualDocumentDate = $("#issue-manual-document-date").value;
  if (!clearance || clearance.status !== "CLEARED") return showToast("اختر بياناً جمركياً مفسوحاً أولاً.", true);
  if (state.docs.some(doc => doc.clearanceId === clearance.id)) return showToast("سبق إصدار وثيقة لهذا البيان.", true);
  if (!truck || truck.status !== "AVAILABLE") return showToast("اختر شاحنة متاحة.", true);
  if (!driver || !driver.isActive) return showToast("اختر سائقاً نشطاً.", true);
  if (!state.accounts.some(account => account.role === "DRIVER" && account.driverId === driver.id && !account.deletedAt)) {
    return showToast("أنشئ حساباً للسائق المحدد قبل تعيين رحلة له.", true);
  }
  if (!customerName || !destination) return showToast("أكمل اسم الشركة ووجهة التسليم.", true);
  if (Boolean(manualDocumentNumber) !== Boolean(manualDocumentDate)) {
    return showToast("أدخل رقم الوثيقة وتاريخها معاً أو اتركهما فارغين.", true);
  }
  try {
    const attachments = await encodeSelectedAttachments($("#transport-attachments"));
    await apiRequest("/api/trips", {
      method: "POST",
      body: {
        clearanceId: clearance.id,
        truckId: truck.id,
        driverId: driver.id,
        customerName,
        destination,
        returnDueAt: $("#issue-return-date").value || "",
        clientRate: $("#issue-client-rate")?.value.trim() || "",
        manualDocumentNumber,
        manualDocumentDate,
        attachments
      }
    });
    $("#issue-form").reset();
    $("#selected-clearance").classList.add("hidden");
    await refreshServerState();
    showToast(manualDocumentNumber
      ? "تم حفظ الرحلة ومرجع وثيقة النقل؛ لم يصدر النظام الوثيقة."
      : "تم إنشاء طلب الرحلة بدون رقم وثيقة.");
    switchView("dashboard");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function recordReturn(id, eirValue = "") {
  const doc = state.docs.find(item => item.id === id);
  if (!doc || doc.returnedAt) return;
  if (doc.cancelledAt) return showToast(API_ERRORS.trip_cancelled, true);
  try {
    await apiRequest(`/api/trips/${encodeURIComponent(doc.tripId)}/return`, {
      method: "POST",
      body: { eir: String(eirValue).trim() }
    });
    await refreshServerState();
    showToast("تم تسجيل عودة الحاوية وتحديث حالة الشاحنة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function cancelTrackedTrip(tripId) {
  const trip = state.docs.find(item => item.tripId === tripId);
  if (!trip || !trip.acceptedAt || trip.returnedAt || trip.cancelledAt) {
    return showToast(API_ERRORS.trip_cancel_unavailable, true);
  }
  if (trip.invoiceId || trip.billingStatus !== "UNBILLED") {
    return showToast(API_ERRORS.trip_cancel_unavailable, true);
  }
  const driverName = driverById(trip.driverId)?.name || "";
  const confirmation = language === "en"
    ? `Cancel the active trip for ${driverName}? The trip record and expenses will be retained.`
    : `هل تريد إلغاء الرحلة للسائق ${driverName}؟ سيبقى سجل الرحلة والمصروفات محفوظاً.`;
  if (!window.confirm(confirmation)) return;

  try {
    await apiRequest(`/api/trips/${encodeURIComponent(trip.tripId)}/cancel`, { method: "POST" });
    await refreshServerState();
    showToast(language === "en" ? "Trip cancelled and truck released." : "تم إلغاء الرحلة وتحرير الشاحنة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function printDocument(id) {
  const doc = state.docs.find(item => item.id === id);
  if (!doc) return showToast("تعذر العثور على الوثيقة.", true);
  const truck = truckForTrip(doc);
  const driver = driverById(doc.driverId);
  const isDraft = doc.status === "DRAFT";
  if (!isDraft) {
    return showToast(doc.source === "MANUAL_ENTRY"
      ? "هذه الوثيقة مسجلة يدوياً ولا توجد لها نسخة PDF مرفقة."
      : "تنزيل PDF الرسمي غير متاح قبل إعداد موصل المنصة المعتمد.", true);
  }
  const documentTitle = doc.documentNumber || "مسودة رحلة";
  let content = `
    <!doctype html><html lang="${language}" dir="${language === "ar" ? "rtl" : "ltr"}"><head><meta charset="utf-8"><title>${escapeHtml(documentTitle)}</title>
    <style>
      body{font-family:Tahoma,Arial,sans-serif;color:#17283d;margin:0;padding:40px;direction:${language === "ar" ? "rtl" : "ltr"}}
      .sheet{max-width:820px;margin:auto;border:1px solid #dfe6ed;padding:34px}
      header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #187b69;padding-bottom:18px}
      h1{font-size:23px;margin:0 0 6px}p{margin:5px 0;color:#637487;font-size:13px}
      .mark{color:#168b73;font-size:23px;font-weight:bold}.ref{color:#2477b6;font-size:15px;font-weight:bold}
      h2{font-size:15px;margin:25px 0 10px}.grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid #e6ebf0}
      .item{padding:12px;border-bottom:1px solid #e6ebf0}.item:nth-child(odd){border-${language === "ar" ? "left" : "right"}:1px solid #e6ebf0}
      small{display:block;color:#8391a0;margin-bottom:6px}strong{font-size:13px}
      .notice{margin-top:24px;padding:12px;background:#f3f8f6;color:#517767;font-size:11px}
      footer{margin-top:40px;display:flex;justify-content:space-between;color:#8090a0;font-size:11px}
      @media print{body{padding:0}.sheet{border:0}}
    </style></head><body><main class="sheet">
      <header><div><h1>ملخص رحلة داخلي</h1><p>مسودة داخلية — غير صادرة من منصة حكومية</p></div><div class="ref">${escapeHtml(doc.documentNumber || "مسودة")}</div></header>
      <h2>بيانات الوثيقة والبيان الجمركي</h2><div class="grid">
        <div class="item"><small>رقم البيان الجمركي</small><strong>${escapeHtml(doc.declarationNumber)}</strong></div>
        <div class="item"><small>تاريخ الإصدار</small><strong>${formatDate(doc.issuedAt)}</strong></div>
        <div class="item"><small>رقم الحاوية</small><strong>${escapeHtml(doc.containerNumber)}</strong></div>
        <div class="item"><small>المقاس والنوع</small><strong>${escapeHtml(doc.size)} · ${CONTAINER_TYPES[doc.type] || "أخرى"}</strong></div>
        <div class="item"><small>رقم الرصاص الملاحي</small><strong>${escapeHtml(doc.sealNumber || "—")}</strong></div>
        <div class="item"><small>اسم الباخرة</small><strong>${escapeHtml(doc.vesselName || "—")}</strong></div>
      </div>
      <h2>بيانات الرحلة</h2><div class="grid">
        <div class="item"><small>الميناء</small><strong>${escapeHtml(doc.port)}</strong></div>
        <div class="item"><small>وجهة التسليم</small><strong>${escapeHtml(doc.destination)}</strong></div>
        <div class="item"><small>الشركة المستلمة</small><strong>${escapeHtml(doc.customerName)}</strong></div>
        <div class="item"><small>الشاحنة / رقم الأسطول</small><strong>${escapeHtml(truck?.plateNumber || "—")} · ${escapeHtml(truck?.fleetNumber || "—")}</strong></div>
        <div class="item"><small>السائق</small><strong>${escapeHtml(driver?.name || "—")} · ${escapeHtml(driver?.phone || "—")}</strong></div>
        <div class="item"><small>موعد إعادة الفارغ</small><strong>${formatDate(doc.returnDueAt)}</strong></div>
      </div>
      <div class="notice">ملخص داخلي للرحلة فقط، ولا يُعد تصريحاً أو وثيقة صادرة من منصة حكومية.</div>
      <footer><span>عَالَمُ الشَّمَالِ لإدارة النقل</span><span>تاريخ الطباعة: ${formatDate(dateOnly())}</span></footer>
    </main><script>window.onload=function(){window.print()}<\/script></body></html>`;
  content = translateText(content);
  const printWindow = window.open("", "_blank");
  if (!printWindow) return showToast("اسمح بالنوافذ المنبثقة لعرض نسخة الطباعة.", true);
  printWindow.document.open();
  printWindow.document.write(content);
  printWindow.document.close();
}

async function exportExcel() {
  const params = new URLSearchParams();
  const from = $("#filter-from").value;
  const to = $("#filter-to").value;
  const port = $("#filter-port").value;
  const customer = $("#filter-customer").value.trim();
  const returnStatus = $("#filter-return").value;
  if (from) params.set("from", from);
  if (to) params.set("to", to);
  if (port) params.set("port", port);
  if (customer) params.set("customer", customer);
  if (returnStatus) params.set("returnStatus", returnStatus);

  try {
    const response = await fetch(`/api/reports.xlsx?${params}`, { credentials: "same-origin" });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(API_ERRORS[payload.error] || `تعذر تصدير التقرير (${response.status}).`);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `north-world-report-${dateOnly()}.xlsx`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("تم تصدير التقرير من الخادم.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function exportClearancesExcel() {
  const query = $("#fasah-query").value.trim();
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  try {
    const response = await fetch(`/api/clearances.xlsx?${params}`, { credentials: "same-origin" });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(API_ERRORS[payload.error] || `تعذر تصدير بيانات الفسح (${response.status}).`);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `north-world-clearances-${dateOnly()}.xlsx`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("تم تصدير بيانات الفسح إلى Excel.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleTruckSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  if (!driverById(values.driverId)?.isActive) return showToast("اختر سائقاً نشطاً للسيارة.", true);
  const currentTruck = editingTruckId ? truckById(editingTruckId) : null;
  const identityFields = ["fleetNumber", "plateNumber", "serialNumber"];
  const duplicate = state.trucks.some(item => item.id !== editingTruckId && identityFields.some(field => {
    const submittedValue = values[field].trim().toLowerCase();
    const unchanged = currentTruck && submittedValue === currentTruck[field].toLowerCase();
    return !unchanged &&
      (currentTruck || !item.deletedAt) &&
      item[field].toLowerCase() === submittedValue;
  }));
  if (duplicate) {
    return showToast(editingTruckId ? "بيانات الشاحنة مسجلة مسبقاً." : "رقم الأسطول أو اللوحة أو الرقم التسلسلي مسجل مسبقاً.", true);
  }
  try {
    const editingTruck = Boolean(editingTruckId);
    await apiRequest(editingTruck ? `/api/trucks/${encodeURIComponent(editingTruckId)}` : "/api/trucks", {
      method: editingTruck ? "PATCH" : "POST",
      body: Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]))
    });
    await refreshServerState();
    if (editingTruck) {
      cancelTruckEdit();
      showToast("تم تحديث بيانات الشاحنة.");
    } else {
      form.reset();
      $("#truck-form-wrap").classList.add("hidden");
      showToast("تمت إضافة الشاحنة.");
    }
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleClearanceSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const isEditing = Boolean(editingClearanceId);
  const clearanceId = editingClearanceId;
  const values = Object.fromEntries(new FormData(form).entries());
  const appointment = pendingFasahAppointmentId
    ? (state.fasahAppointments || []).find(item => item.id === pendingFasahAppointmentId)
    : null;
  const appointmentMatchesClearance = Boolean(appointment &&
    appointmentDeclarationNumber(appointment).trim() === values.declarationNumber.trim() &&
    normalizeContainerNumber(appointmentContainerNumber(appointment)) === normalizeContainerNumber(values.containerNumber));
  const matchedAppointment = appointmentMatchesClearance ? appointment : null;
  if (matchedAppointment && values.status !== "CLEARED") {
    return showToast("لا يمكن استخدام بيانات الموعد لإصدار رحلة قبل تأكيد حالة الفسح.", true);
  }
  if (values.status === "CLEARED" && !$("#clearance-confirmed").checked) {
    return showToast("أكد حالة الفسح وتاريخه من مستند رسمي قبل الحفظ.", true);
  }
  if (values.status === "CLEARED" && !values.clearedAt) {
    return showToast("أدخل تاريخ الفسح للحاوية المفسوحة.", true);
  }
  try {
    const attachments = await encodeSelectedAttachments($("#clearance-attachments"));
    const clearance = await apiRequest(
      isEditing ? `/api/clearances/${encodeURIComponent(clearanceId)}` : "/api/clearances/manual",
      {
        method: isEditing ? "PATCH" : "POST",
        body: { ...values, clearanceConfirmed: $("#clearance-confirmed").checked, attachments }
      }
    );
    editingClearanceId = null;
    pendingFasahAppointmentId = null;
    form.reset();
    $("#clearance-declaration-field").classList.remove("hidden");
    $("#clearance-submit-button").textContent = translateText("إضافة بيانات الفسح");
    $("#cancel-clearance-edit").classList.add("hidden");
    updateClearancePortCity();
    updateClearanceConfirmation();
    $("#clearance-form-wrap").classList.add("hidden");
    await refreshServerState();
    $("#fasah-query").value = clearance.declarationNumber;
    await renderFasahResults(clearance.declarationNumber);
    if (matchedAppointment && clearance.status === "CLEARED") {
      switchView("issue");
      resetAppointmentIssueContext();
      populateIssueOptions(clearance.id);
      $("#issue-clearance").value = clearance.id;
      renderSelectedClearance();
      const driverMatch = matchIssueDriverFromAppointment(matchedAppointment);
      if (driverMatch === "matched") showToast("تم حفظ بيانات الحاوية من الموعد، ومطابقة جوال السائق.");
      else if (driverMatch === "no_available_truck") showToast("تم مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.", true);
      else showToast("رقم جوال التذكرة لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.", true);
      return;
    }
    showToast(isEditing
      ? "تم تحديث بيانات الفسح."
      : "تم حفظ بيانات الفسح اليدوية. لم يتم التحقق منها لدى منصة فسح.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleFasahPdfPreview(event) {
  event.preventDefault();
  const fileInput = $("#fasah-appointment-file");
  const extractButton = $("#fasah-pdf-extract-button");
  extractButton.disabled = true;
  try {
    const [file] = await encodeSelectedAttachments(fileInput);
    if (!file || file.type !== "application/pdf") throw new Error(translateText("اختر ملف PDF صحيحاً."));
    const result = await apiRequest("/api/fasah/appointments/preview", {
      method: "POST",
      body: { fileName: file.name, data: file.data }
    });
    latestFasahPdfExtraction = {
      fields: result.fields || {},
      extractedAt: Date.now(),
      appointmentId: null
    };
    const form = $("#fasah-appointment-review-form");
    for (const [key, value] of Object.entries(result.fields || {})) {
      const input = form.elements.namedItem(key);
      if (input && typeof value === "string") input.value = value;
    }
    const clearanceFieldsComplete = fillClearanceFormFromAppointment(result.fields || {});
    fileInput.disabled = true;
    form.classList.remove("hidden");
    const message = $("#fasah-pdf-message");
    message.textContent = result.fields?.missingFields?.length || !clearanceFieldsComplete
      ? translateText("بعض الحقول الأساسية لم تُستخرج. أكملها يدوياً قبل الحفظ.")
      : translateText("تم استخراج البيانات؛ راجعها ثم احفظ السجل.");
    message.classList.remove("hidden");
    if (clearanceFieldsComplete) {
      showToast("تم ملء البيان والحاوية واسم الميناء وتاريخ الموعد من PDF. المقاس افتراضياً 40 قدم؛ أدخل نوع الحاوية وراجع التاريخ وفق إثبات الفسح الرسمي.");
    }
  } catch (error) {
    showToast(error.message, true);
  } finally {
    extractButton.disabled = false;
  }
}

async function handleFasahAppointmentSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const isEditing = Boolean(editingFasahAppointmentId);
  const saveButton = $("#fasah-appointment-save");
  saveButton.disabled = true;
  try {
    const attachments = await encodeSelectedAttachments($("#fasah-appointment-file"));
    if ((!isEditing && attachments.length !== 1) ||
        attachments.length > 1 ||
        attachments.some(attachment => attachment.type !== "application/pdf")) {
      throw new Error(translateText("ارفع ملف PDF لتذكرة الموعد."));
    }
    const values = Object.fromEntries(new FormData(form).entries());
    const appointment = await apiRequest(isEditing
      ? `/api/fasah/appointments/${encodeURIComponent(editingFasahAppointmentId)}`
      : "/api/fasah/appointments", {
      method: isEditing ? "PATCH" : "POST",
      body: { ...values, ...(attachments.length ? { attachments } : {}) }
    });
    latestFasahPdfExtraction = {
      fields: appointment,
      extractedAt: Date.parse(appointment.createdAt) || Date.now(),
      appointmentId: appointment.id
    };
    cancelFasahAppointmentPreview();
    await refreshServerState();
    $("#fasah-query").value = appointment.bookingReferenceNumber;
    await renderFasahResults(appointment.bookingReferenceNumber);
    renderFasahAppointments();
    if (isEditing) {
      showToast("تم تحديث موعد فسح.");
      return;
    }
    const containerNumber = appointmentContainerNumber(appointment);
    const hasExistingClearance = Boolean(containerNumber) && state.clearances.some(item =>
      normalizeContainerNumber(item.containerNumber) === normalizeContainerNumber(containerNumber)
    );
    const clearanceFieldsComplete = !hasExistingClearance &&
      fillClearanceFormFromAppointment(appointment, appointment.id, false);
    showToast(clearanceFieldsComplete
      ? "تم حفظ موعد فسح مع ملف PDF، وتم تعبئة نموذج الفسح تلقائياً."
      : "تم حفظ موعد فسح مع ملف PDF. هذه بيانات التذكرة وليست تأكيداً لحالة الفسح.");
  } catch (error) {
    showToast(error.message, true);
  } finally {
    saveButton.disabled = false;
  }
}

function cancelFasahAppointmentPreview() {
  if (latestFasahPdfExtraction && !latestFasahPdfExtraction.appointmentId) {
    latestFasahPdfExtraction = null;
  }
  editingFasahAppointmentId = null;
  $("#fasah-pdf-extract-form").reset();
  $("#fasah-appointment-review-form").reset();
  $("#fasah-appointment-review-form").classList.add("hidden");
  $("#fasah-appointment-file").disabled = false;
  $("#fasah-appointment-file").required = true;
  $("#fasah-pdf-extract-form").classList.remove("hidden");
  $("#fasah-appointment-edit-hint").classList.add("hidden");
  $("#fasah-appointment-save").textContent = translateText("حفظ الموعد وملف PDF");
  $("#fasah-pdf-message").classList.add("hidden");
}

async function handleDriverSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  if (state.drivers.some(item => !item.deletedAt && item.id !== editingDriverId && (
    item.nationalId.toLowerCase() === values.nationalId.trim().toLowerCase() ||
    (item.passportNumber || "").toLowerCase() === values.passportNumber.trim().toLowerCase()
  ))) {
    return showToast(editingDriverId ? "بيانات السائق مسجلة مسبقاً." : "رقم الهوية أو جواز السفر مسجل مسبقاً.", true);
  }
  try {
    const editingDriver = Boolean(editingDriverId);
    await apiRequest(editingDriver ? `/api/drivers/${encodeURIComponent(editingDriverId)}` : "/api/drivers", {
      method: editingDriver ? "PATCH" : "POST",
      body: Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]))
    });
    await refreshServerState();
    if (editingDriver) {
      cancelDriverEdit();
      showToast("تم تحديث بيانات السائق.");
    } else {
      form.reset();
      $("#driver-form-wrap").classList.add("hidden");
      showToast("تمت إضافة السائق.");
    }
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleTripExpenseSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const trip = state.docs.find(doc =>
    doc.tripId === values.tripId &&
    doc.driverId === currentAccount?.driverId &&
    doc.acceptedAt &&
    !doc.cancelledAt
  );
  if (!trip) return showToast("لا يمكن إضافة تكلفة لهذه الرحلة.", true);

  try {
    const attachments = await encodeSelectedAttachments($("#trip-expense-attachments"));
    await apiRequest("/api/trip-expenses", {
      method: "POST",
      body: {
        tripId: trip.tripId,
        amount: values.amount.trim(),
        type: values.type,
        notes: values.notes.trim(),
        attachments
      }
    });
    form.reset();
    await refreshServerState();
    showToast("تم تسجيل التكلفة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleTripExpenseEditSubmit(event) {
  event.preventDefault();
  const expense = (state.tripExpenses || []).find(item => item.id === editingTripExpenseId);
  if (!expense) return showToast("السجل المطلوب غير موجود.", true);

  const form = event.currentTarget;
  const submitButton = $("#expense-edit-submit");
  submitButton.disabled = true;
  try {
    const values = Object.fromEntries(new FormData(form).entries());
    const attachments = await encodeSelectedAttachments($("#expense-edit-attachments"));
    await apiRequest(`/api/trip-expenses/${encodeURIComponent(expense.id)}`, {
      method: "PATCH",
      body: {
        amount: String(values.amount).trim(),
        type: values.type,
        notes: String(values.notes || "").trim(),
        ...(attachments.length ? { attachments } : {})
      }
    });
    cancelTripExpenseEdit();
    await refreshServerState();
    showToast("تم تحديث تكلفة الرحلة.");
  } catch (error) {
    showToast(error.message, true);
  } finally {
    submitButton.disabled = false;
  }
}

function clearReportFilters() {
  $("#filter-from").value = "";
  $("#filter-to").value = "";
  $("#filter-port").value = "";
  $("#filter-customer").value = "";
  $("#filter-return").value = "";
  renderReports();
}

// ==========================================
// TARIFFS, DOMESTIC TRIPS & INVOICES MODULE
// ==========================================

function populateCustomerDatalist() {
  const datalist = $("#customer-list");
  if (!datalist) return;
  const customers = new Set();
  (state.customers || []).forEach(c => c.name && customers.add(c.name));
  (state.docs || []).forEach(d => d.customerName && customers.add(d.customerName));
  (state.tariffs || []).forEach(t => t.customerName && customers.add(t.customerName));
  datalist.innerHTML = Array.from(customers).sort().map(name => `<option value="${escapeHtml(name)}">`).join("");
}

function findMatchingTariff(customerName, origin, destination) {
  if (!customerName || !destination) return null;
  const cName = customerName.trim().toLowerCase();
  const dest = destination.trim().toLowerCase();
  const orig = (origin || "").trim().toLowerCase();

  return (state.tariffs || []).find(t => {
    const matchCust = (t.customerName || "").toLowerCase() === cName;
    const matchDest = (t.destination || "").toLowerCase().includes(dest) || dest.includes((t.destination || "").toLowerCase());
    const matchOrig = !orig || (t.origin || "").toLowerCase().includes(orig) || orig.includes((t.origin || "").toLowerCase());
    return matchCust && matchDest && matchOrig;
  }) || (state.tariffs || []).find(t => {
    const matchCust = (t.customerName || "").toLowerCase() === cName;
    const matchDest = (t.destination || "").toLowerCase().includes(dest) || dest.includes((t.destination || "").toLowerCase());
    return matchCust && matchDest;
  });
}

function autoLookupIssueTariff() {
  const customer = $("#issue-customer")?.value.trim();
  const destination = $("#issue-destination")?.value.trim();
  const clearance = clearanceById($("#issue-clearance")?.value);
  const origin = clearance?.port?.name || "";
  const tariff = findMatchingTariff(customer, origin, destination);
  if (tariff) {
    if ($("#issue-client-rate")) $("#issue-client-rate").value = tariff.price;
  }
}

function populateDomesticOptions() {
  const truckSelect = $("#domestic-truck");
  const driverSelect = $("#domestic-driver");
  if (!truckSelect || !driverSelect) return;

  const currentTruck = truckSelect.value;
  const currentDriver = driverSelect.value;
  const editingTrip = editingDomesticTripId
    ? state.docs.find(doc => doc.tripId === editingDomesticTripId)
    : null;

  truckSelect.innerHTML = `<option value="">${translateText("اختر الشاحنة")}</option>` +
    state.trucks
      .filter(truck => !truck.deletedAt && (
        truck.status === "AVAILABLE" ||
        truck.id === currentTruck ||
        truck.id === editingTrip?.truckId
      ))
      .map(truck => {
        const assignedDriver = driverById(truck.driverId);
        const extra = assignedDriver ? ` (${assignedDriver.name})` : "";
        return `<option value="${escapeHtml(truck.id)}">${escapeHtml(truck.plateNumber)} — ${escapeHtml(truck.fleetNumber)}${extra}</option>`;
      }).join("");

  driverSelect.innerHTML = `<option value="">${translateText("اختر السائق")}</option>` +
    state.drivers
      .filter(driver => !driver.deletedAt && driver.isActive)
      .map(driver => `<option value="${escapeHtml(driver.id)}">${escapeHtml(driver.name)} (${escapeHtml(driver.phone)})</option>`)
      .join("");

  if (currentTruck) truckSelect.value = currentTruck;
  if (currentDriver) driverSelect.value = currentDriver;

  if ($("#domestic-doc-date") && !$("#domestic-doc-date").value) {
    $("#domestic-doc-date").value = dateOnly();
  }
}

function syncDomesticTruckDriver(source) {
  if (source === "driver") {
    const driverId = $("#domestic-driver")?.value;
    if (!driverId) return;
    const truck = state.trucks.find(t => t.driverId === driverId && t.status === "AVAILABLE" && !t.deletedAt);
    if (truck && $("#domestic-truck")) $("#domestic-truck").value = truck.id;
  } else if (source === "truck") {
    const truckId = $("#domestic-truck")?.value;
    if (!truckId) return;
    const truck = truckById(truckId);
    if (truck && truck.driverId && $("#domestic-driver")) $("#domestic-driver").value = truck.driverId;
  }
}

function renderDomesticTrips(query = "") {
  const tbody = $("#domestic-rows");
  if (!tbody) return;
  const q = String(query ?? $("#domestic-filter")?.value ?? "").trim().toLowerCase();

  const domesticDocs = state.docs.filter(doc => doc.tripType === "DOMESTIC");
  const filtered = domesticDocs.filter(doc => {
    if (!q) return true;
    return (
      (doc.customerName || "").toLowerCase().includes(q) ||
      (doc.origin || "").toLowerCase().includes(q) ||
      (doc.destination || "").toLowerCase().includes(q) ||
      (doc.issuedAt || "").toLowerCase().includes(q) ||
      (driverById(doc.driverId)?.name || "").toLowerCase().includes(q) ||
      (doc.truckPlateNumber || "").toLowerCase().includes(q) ||
      (doc.truckFleetNumber || "").toLowerCase().includes(q)
    );
  });

  if ($("#domestic-count")) $("#domestic-count").textContent = domesticDocs.length;
  if ($("#domestic-empty")) $("#domestic-empty").classList.toggle("hidden", filtered.length > 0);

  tbody.innerHTML = filtered.map(doc => {
    const driver = driverById(doc.driverId);
    const driverName = driver ? driver.name : "—";
    const canManage = domesticTripCanManage(doc);
    const truckName = doc.truckPlateNumber
      ? `${doc.truckPlateNumber}${doc.truckFleetNumber ? ` — ${doc.truckFleetNumber}` : ""}`
      : (doc.truckFleetNumber || "—");

    return `
      <tr>
        <td>${escapeHtml(doc.customerName || "—")}</td>
        <td>${escapeHtml(doc.origin || "—")}</td>
        <td>${escapeHtml(doc.destination || "—")}</td>
        <td>${formatDate(doc.issuedAt)}</td>
        <td>${escapeHtml(driverName)}</td>
        <td>${escapeHtml(truckName)}</td>
        <td><div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-domestic-trip" data-id="${escapeHtml(doc.tripId)}" ${canManage ? "" : `disabled title="${translateText("لا يمكن تعديل أو حذف رحلة بدأت أو أُضيفت لفاتورة أو لها مصروفات.")}"`}>${translateText("تعديل")}</button><button class="delete-button" type="button" data-action="delete-domestic-trip" data-id="${escapeHtml(doc.tripId)}" ${canManage ? "" : `disabled title="${translateText("لا يمكن تعديل أو حذف رحلة بدأت أو أُضيفت لفاتورة أو لها مصروفات.")}"`}>${translateText("حذف")}</button></div></td>
      </tr>
    `;
  }).join("");
}

function domesticTripCanManage(doc) {
  return doc.tripType === "DOMESTIC" &&
    doc.requestStatus === "PENDING" &&
    !doc.acceptedAt &&
    !doc.returnedAt &&
    doc.billingStatus === "UNBILLED" &&
    !doc.invoiceId &&
    !doc.documentNumber &&
    !(doc.stageHistory || []).length &&
    !(state.tripExpenses || []).some(expense => expense.tripId === doc.tripId);
}

function beginDomesticTripEdit(id) {
  const trip = state.docs.find(doc => doc.tripId === id && doc.tripType === "DOMESTIC");
  if (!trip || !domesticTripCanManage(trip)) {
    return showToast("لا يمكن تعديل أو حذف رحلة بدأت أو أُضيفت لفاتورة أو لها مصروفات.", true);
  }

  editingDomesticTripId = trip.tripId;
  $("#domestic-form-wrap").classList.remove("hidden");
  $("#domestic-form-title").textContent = translateText("تعديل رحلة النقل الداخلي");
  $("#domestic-submit-button").textContent = translateText("حفظ تعديلات الرحلة");
  $("#domestic-customer").value = trip.customerName || "";
  $("#domestic-origin").value = trip.origin || "";
  $("#domestic-destination").value = trip.destination || "";
  $("#domestic-doc-date").value = trip.issuedAt || "";
  populateDomesticOptions();
  $("#domestic-driver").value = trip.driverId;
  $("#domestic-truck").value = trip.truckId;
  $("#domestic-form-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelDomesticTripEdit() {
  editingDomesticTripId = null;
  $("#domestic-trip-form").reset();
  $("#domestic-form-wrap").classList.add("hidden");
  $("#domestic-form-title").textContent = translateText("بيانات الرحلة والنقل الداخلي");
  $("#domestic-submit-button").textContent = translateText("حفظ وإرسال الطلب للسائق");
  populateDomesticOptions();
}

async function deleteDomesticTrip(id) {
  const trip = state.docs.find(doc => doc.tripId === id && doc.tripType === "DOMESTIC");
  if (!trip || !domesticTripCanManage(trip)) {
    return showToast("لا يمكن تعديل أو حذف رحلة بدأت أو أُضيفت لفاتورة أو لها مصروفات.", true);
  }
  if (!window.confirm(
    `${translateText("هل تريد حذف رحلة النقل الداخلي للشركة ")}${trip.customerName}${translateText("؟ سيُعاد تعيين الشاحنة كمتاحة.")}`
  )) return;

  try {
    await apiRequest(`/api/trips/domestic/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDomesticTripId === id) cancelDomesticTripEdit();
    await refreshServerState();
    renderDomesticTrips($("#domestic-filter").value);
    showToast("تم حذف رحلة النقل الداخلي وإتاحة الشاحنة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

async function handleDomesticTripSubmit(event) {
  event.preventDefault();
  const isEditing = Boolean(editingDomesticTripId);
  const customerName = $("#domestic-customer")?.value.trim();
  const origin = $("#domestic-origin")?.value.trim();
  const destination = $("#domestic-destination")?.value.trim();
  const driverId = $("#domestic-driver")?.value;
  const truckId = $("#domestic-truck")?.value;
  const manualDocumentDate = $("#domestic-doc-date")?.value || dateOnly();

  if (!customerName || !origin || !destination) {
    return showToast("أكمل اسم الشركة وموقعي التحميل والتسليم.", true);
  }
  if (!truckId) return showToast("اختر شاحنة متاحة.", true);
  if (!driverId) return showToast("اختر سائقاً نشطاً.", true);

  const driver = driverById(driverId);
  if (!driver || !driver.isActive) return showToast("اختر سائقاً نشطاً.", true);
  if (!state.accounts.some(account => account.role === "DRIVER" && account.driverId === driver.id && !account.deletedAt)) {
    return showToast("أنشئ حساباً للسائق المحدد قبل تعيين رحلة له.", true);
  }

  try {
    await apiRequest(isEditing
      ? `/api/trips/domestic/${encodeURIComponent(editingDomesticTripId)}`
      : "/api/trips/domestic", {
      method: isEditing ? "PATCH" : "POST",
      body: {
        customerName,
        origin,
        destination,
        truckId,
        driverId,
        manualDocumentDate,
      }
    });

    cancelDomesticTripEdit();
    await refreshServerState();
    renderDomesticTrips($("#domestic-filter").value);
    showToast(isEditing
      ? "تم تعديل بيانات رحلة النقل الداخلي."
      : "تم تسجيل رحلة النقل الداخلي وإرسال الطلب للسائق بنجاح!");
    switchView("domestic");
  } catch (error) {
    showToast(error.message, true);
  }
}

function renderTariffs(query = "") {
  const tbody = $("#tariff-rows");
  if (!tbody) return;
  const q = String(query ?? $("#tariff-search")?.value ?? "").trim().toLowerCase();

  const filtered = (state.tariffs || []).filter(item => {
    if (!q) return true;
    return (
      (item.customerName || "").toLowerCase().includes(q) ||
      (item.origin || "").toLowerCase().includes(q) ||
      (item.destination || "").toLowerCase().includes(q) ||
      (item.notes || "").toLowerCase().includes(q)
    );
  });

  if ($("#tariff-count")) $("#tariff-count").textContent = (state.tariffs || []).length;
  if ($("#tariff-empty")) $("#tariff-empty").classList.toggle("hidden", filtered.length > 0);

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td><strong>${escapeHtml(item.customerName)}</strong></td>
      <td>${escapeHtml(item.origin)}</td>
      <td>${escapeHtml(item.destination)}</td>
      <td><strong style="color: #059669;">${Number(item.price).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</strong></td>
      <td><small>${escapeHtml(item.notes || "—")}</small></td>
      <td>
        <button class="button button-light button-small" data-action="edit-tariff" data-id="${escapeHtml(item.id)}">${translateText("تعديل")}</button>
        <button class="button button-danger button-small" data-action="delete-tariff" data-id="${escapeHtml(item.id)}">${translateText("حذف")}</button>
      </td>
    </tr>
  `).join("");
}

async function handleTariffSubmit(event) {
  event.preventDefault();
  const customerName = $("#tariff-customer")?.value.trim();
  const origin = $("#tariff-origin")?.value.trim();
  const destination = $("#tariff-destination")?.value.trim();
  const price = $("#tariff-price")?.value.trim();
  const notes = $("#tariff-notes")?.value.trim() || "";

  if (!customerName || !origin || !destination || !price) {
    return showToast("أكمل اسم الشركة والمسار وسعر النقل.", true);
  }

  try {
    if (editingTariffId) {
      await apiRequest(`/api/tariffs/${encodeURIComponent(editingTariffId)}`, {
        method: "PUT",
        body: { origin, destination, price, notes }
      });
      showToast("تم تحديث سعر المسار.");
    } else {
      await apiRequest("/api/tariffs", {
        method: "POST",
        body: { customerName, origin, destination, price, notes }
      });
      showToast("تمت إضافة سعر المسار للشركة.");
    }
    cancelTariffEdit();
    await refreshServerState();
  } catch (error) {
    showToast(error.message, true);
  }
}

function editTariff(id) {
  const tariff = (state.tariffs || []).find(t => t.id === id);
  if (!tariff) return;
  editingTariffId = id;
  if ($("#tariff-edit-id")) $("#tariff-edit-id").value = id;
  if ($("#tariff-customer")) {
    $("#tariff-customer").value = tariff.customerName;
    $("#tariff-customer").disabled = true;
  }
  if ($("#tariff-origin")) $("#tariff-origin").value = tariff.origin;
  if ($("#tariff-destination")) $("#tariff-destination").value = tariff.destination;
  if ($("#tariff-price")) $("#tariff-price").value = tariff.price;
  if ($("#tariff-notes")) $("#tariff-notes").value = tariff.notes || "";
  if ($("#tariff-submit-button")) $("#tariff-submit-button").textContent = translateText("حفظ التعديلات");
  $("#tariff-form-wrap")?.classList.remove("hidden");
  window.scrollTo({ top: $("#tariff-form-wrap").offsetTop - 80, behavior: "smooth" });
}

function cancelTariffEdit() {
  editingTariffId = null;
  $("#tariff-form")?.reset();
  if ($("#tariff-customer")) $("#tariff-customer").disabled = false;
  if ($("#tariff-submit-button")) $("#tariff-submit-button").textContent = translateText("حفظ السعر");
  $("#tariff-form-wrap")?.classList.add("hidden");
}

async function deleteTariff(id) {
  const tariff = (state.tariffs || []).find(t => t.id === id);
  if (!tariff) return;
  if (!window.confirm(`هل أنت متأكد من حذف تسعيرة المسار (${tariff.origin} ← ${tariff.destination}) لشركة ${tariff.customerName}؟`)) {
    return;
  }
  try {
    await apiRequest(`/api/tariffs/${encodeURIComponent(id)}`, { method: "DELETE" });
    await refreshServerState();
    showToast("تم حذف تسعيرة المسار.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function renderInvoices(query = "") {
  const tbody = $("#invoices-rows");
  if (!tbody) return;
  const q = String(query ?? $("#invoice-search")?.value ?? "").trim().toLowerCase();

  const invoices = state.invoices || [];
  const filtered = invoices.filter(inv => {
    if (!q) return true;
    return (
      (inv.invoiceNumber || "").toLowerCase().includes(q) ||
      (inv.customerName || "").toLowerCase().includes(q) ||
      (inv.notes || "").toLowerCase().includes(q)
    );
  });

  const totalInvoiced = invoices.reduce((acc, inv) => acc + Number(inv.totalAmount || 0), 0);
  const paidCount = invoices.filter(inv => inv.status === "PAID").length;
  const unbilledCount = state.docs.filter(d => d.billingStatus === "UNBILLED" && !d.cancelledAt).length;

  if ($("#invoices-count")) $("#invoices-count").textContent = invoices.length;
  if ($("#stat-invoice-count")) $("#stat-invoice-count").textContent = invoices.length;
  if ($("#stat-invoice-total")) $("#stat-invoice-total").textContent = `${totalInvoiced.toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س`;
  if ($("#stat-unbilled-count")) $("#stat-unbilled-count").textContent = unbilledCount;
  if ($("#stat-paid-count")) $("#stat-paid-count").textContent = paidCount;
  if ($("#invoices-empty")) $("#invoices-empty").classList.toggle("hidden", filtered.length > 0);

  tbody.innerHTML = filtered.map(inv => {
    const statusPill = inv.status === "PAID"
      ? `<span class="status-pill status-paid">${translateText("مسددة")}</span>`
      : inv.status === "CANCELLED"
      ? `<span class="status-pill status-cancelled">${translateText("ملغاة")}</span>`
      : `<span class="status-pill status-invoiced">${translateText("صادرة")}</span>`;

    const actionButtons = `
      <button class="button button-primary button-small" data-action="print-invoice" data-id="${escapeHtml(inv.id)}">🖨 ${translateText("معاينة وطباعة")}</button>
      ${inv.status === "ISSUED" ? `
        <button class="button button-green button-small" data-action="invoice-paid" data-id="${escapeHtml(inv.id)}">✓ ${translateText("تسجيل سداد")}</button>
        <button class="button button-danger button-small" data-action="invoice-cancel" data-id="${escapeHtml(inv.id)}">✕ ${translateText("إلغاء")}</button>
      ` : ""}
    `;

    return `
      <tr>
        <td><strong>${escapeHtml(inv.invoiceNumber)}</strong></td>
        <td>${escapeHtml(inv.customerName)}</td>
        <td>${formatDate(inv.issueDate)}</td>
        <td><span class="record-count">${inv.tripCount}</span></td>
        <td>${Number(inv.subtotal).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</td>
        <td>${Number(inv.taxAmount).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</td>
        <td><strong style="color: #059669;">${Number(inv.totalAmount).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</strong></td>
        <td>${statusPill}</td>
        <td>${actionButtons}</td>
      </tr>
    `;
  }).join("");
}

function populateInvoiceWizardCustomers() {
  const select = $("#invoice-wizard-customer");
  if (!select) return;
  const customersWithUnbilled = new Set();
  state.docs.forEach(doc => {
    if (doc.billingStatus === "UNBILLED" && !doc.cancelledAt && doc.customerName) {
      customersWithUnbilled.add(doc.customerName);
    }
  });

  const selectedVal = select.value;
  select.innerHTML = `<option value="">${translateText("-- اختر الشركة لعرض رحلاتها --")}</option>` +
    Array.from(customersWithUnbilled).sort().map(name => {
      const count = state.docs.filter(d => d.customerName === name && d.billingStatus === "UNBILLED" && !d.cancelledAt).length;
      return `<option value="${escapeHtml(name)}">${escapeHtml(name)} (${count} رحلات غير مفوترة)</option>`;
    }).join("");

  if (selectedVal && customersWithUnbilled.has(selectedVal)) {
    select.value = selectedVal;
  }
}

function renderUnbilledTripsForCustomer(customerName) {
  const tbody = $("#invoice-unbilled-rows");
  const statusElem = $("#unbilled-selection-status");
  if (!tbody) return;

  if (!customerName) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-cell">${translateText("يرجى اختيار شركة من القائمة أعلاه")}</td></tr>`;
    if (statusElem) statusElem.textContent = translateText("اختر شركة أعلاه لعرض عملياتها غير المفوترة");
    calculateInvoiceWizardTotals();
    return;
  }

  const unbilledTrips = state.docs.filter(doc =>
    doc.customerName === customerName && doc.billingStatus === "UNBILLED" && !doc.cancelledAt
  );

  if (unbilledTrips.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-cell">${translateText("لا توجد رحلات غير مفوترة لهذه الشركة")}</td></tr>`;
    if (statusElem) statusElem.textContent = translateText("لا توجد عمليات بانتظار الفوترة");
    calculateInvoiceWizardTotals();
    return;
  }

  if (statusElem) {
    statusElem.textContent = `${unbilledTrips.length} ${translateText("رحلات متاحة للفوترة — حدد الرحلات لإدراجها")}`;
  }

  tbody.innerHTML = unbilledTrips.map(trip => {
    const tripTypeLabel = trip.tripType === "DOMESTIC" ? "نقل داخلي" : "نقل ميناء";
    const refNumber = trip.declarationNumber || trip.cargoWaybillNumber || trip.documentNumber || "—";
    const cargoLabel = trip.containerNumber || trip.cargoDescription || "—";
    const rateVal = trip.clientRate ? Number(trip.clientRate) : 0;

    return `
      <tr>
        <td><input type="checkbox" class="trip-invoice-check" value="${escapeHtml(trip.tripId)}" data-rate="${rateVal}" checked></td>
        <td>${formatDate(trip.issuedAt)}</td>
        <td><span class="status-pill ${trip.tripType === "DOMESTIC" ? "status-domestic" : "status-port"}">${translateText(tripTypeLabel)}</span></td>
        <td>${escapeHtml(refNumber)}</td>
        <td>${escapeHtml(cargoLabel)}</td>
        <td>${escapeHtml(trip.origin || "—")} ← ${escapeHtml(trip.destination || "—")}</td>
        <td><strong>${rateVal ? `${rateVal.toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س` : `<span style="color: #b91c1c;">(غير محدد)</span>`}</strong></td>
      </tr>
    `;
  }).join("");

  calculateInvoiceWizardTotals();
}

function calculateInvoiceWizardTotals() {
  const checkboxes = $$(".trip-invoice-check:checked", $("#invoice-unbilled-rows"));
  let subtotal = 0;
  checkboxes.forEach(cb => {
    subtotal += Number(cb.dataset.rate || 0);
  });

  const taxRate = Number($("#invoice-wizard-tax-rate")?.value || 15);
  const taxAmount = Number(((subtotal * taxRate) / 100).toFixed(2));
  const total = Number((subtotal + taxAmount).toFixed(2));

  if ($("#invoice-calc-subtotal")) $("#invoice-calc-subtotal").textContent = `${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س`;
  if ($("#invoice-calc-tax")) $("#invoice-calc-tax").textContent = `${taxAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س (${taxRate}%)`;
  if ($("#invoice-calc-total")) $("#invoice-calc-total").textContent = `${total.toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س`;

  if ($("#generate-invoice-button")) {
    $("#generate-invoice-button").disabled = (checkboxes.length === 0);
  }
}

async function handleGenerateInvoice() {
  const customerName = $("#invoice-wizard-customer")?.value;
  if (!customerName) return showToast("اختر الشركة أولاً.", true);

  const selectedTrips = $$(".trip-invoice-check:checked", $("#invoice-unbilled-rows")).map(cb => cb.value);
  if (selectedTrips.length === 0) return showToast("حدد على الأقل رحلة واحدة لإصدار الفاتورة.", true);

  const taxRate = Number($("#invoice-wizard-tax-rate")?.value || 15);
  const notes = $("#invoice-wizard-notes")?.value.trim() || "";
  const customInvoiceNumber = $("#invoice-wizard-number")?.value.trim() || undefined;

  try {
    const created = await apiRequest("/api/invoices", {
      method: "POST",
      body: {
        customerName,
        tripIds: selectedTrips,
        taxRate,
        notes,
        customInvoiceNumber
      }
    });

    $("#invoice-wizard-wrap").classList.add("hidden");
    await refreshServerState();
    showToast("تم إصدار الفاتورة الضريبية بنجاح!");
    openPrintableInvoice(created.id);
  } catch (error) {
    showToast(error.message, true);
  }
}

function openPrintableInvoice(invoiceId) {
  const inv = (state.invoices || []).find(i => i.id === invoiceId);
  if (!inv) return showToast("تعذر العثور على الفاتورة.", true);

  currentPrintableInvoiceId = invoiceId;
  const printArea = $("#printable-invoice-area");
  if (!printArea) return;

  const trips = inv.trips || [];
  const rowsHtml = trips.map((trip, idx) => {
    const tripTypeLabel = trip.tripType === "DOMESTIC" ? "نقل داخلي" : "نقل ميناء";
    const refNumber = trip.declarationNumber || trip.cargoWaybillNumber || trip.documentNumber || "—";
    const cargoLabel = trip.containerNumber || trip.cargoDescription || "—";
    const rateVal = trip.clientRate ? Number(trip.clientRate) : 0;

    return `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td>${formatDate(trip.issuedAt)}</td>
        <td>${tripTypeLabel}</td>
        <td>${escapeHtml(refNumber)}</td>
        <td>${escapeHtml(cargoLabel)}</td>
        <td>${escapeHtml(trip.origin || "—")} ← ${escapeHtml(trip.destination || "—")}</td>
        <td>${escapeHtml(trip.truckPlateNumber || "—")}</td>
        <td style="text-align: left; font-weight: 700;">${rateVal.toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</td>
      </tr>
    `;
  }).join("");

  printArea.innerHTML = `
    <div class="inv-header">
      <div class="inv-brand">
        <img class="inv-brand-logo" src="assets/north-world-logo.jpeg" alt="North World Logo">
        <div>
          <h1 class="inv-company-name">عَالَمُ الشَّمَالِ لإدارة النقل</h1>
          <p class="inv-company-subtitle">North World Transport Management</p>
          <div class="inv-tax-number">الرقم الضريبي: <strong>310245896300003</strong></div>
        </div>
      </div>
      <div class="inv-meta">
        <h2 class="inv-title">فاتورة ضريبية</h2>
        <div class="inv-badge status-pill status-invoiced">Tax Invoice</div>
        <div>رقم الفاتورة: <strong>${escapeHtml(inv.invoiceNumber)}</strong></div>
        <div>تاريخ الإصدار: <strong>${formatDate(inv.issueDate)}</strong></div>
        <div>الحالة: <strong>${inv.status === "PAID" ? "مسددة" : "صادرة"}</strong></div>
      </div>
    </div>

    <div class="inv-parties">
      <div>
        <div class="party-title">الشركة الموردة (الناقل)</div>
        <div class="party-name">مؤسسة عالم الشمال للنقل البري</div>
        <div>المملكة العربية السعودية — الرياض</div>
        <div>هاتف: 0500000000 | البريد: info@northworld.sa</div>
      </div>
      <div>
        <div class="party-title">بيانات العميل المستفيد</div>
        <div class="party-name">${escapeHtml(inv.customerName)}</div>
        <div>الرقم الضريبي للعميل: ${escapeHtml(inv.customerTaxNumber || "—")}</div>
        <div>عدد عمليات النقل: ${inv.tripCount} رحلة</div>
      </div>
    </div>

    <table class="inv-table">
      <thead>
        <tr>
          <th style="width: 40px; text-align: center;">#</th>
          <th>تاريخ الرحلة</th>
          <th>نوع النقل</th>
          <th>البيان / البوليصة</th>
          <th>الحاوية / الشحنة</th>
          <th>المسار (من ← إلى)</th>
          <th>رقم السيارة</th>
          <th style="text-align: left;">المبلغ (ريال)</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>

    <div class="inv-totals-box">
      <table class="inv-totals-table">
        <tr>
          <td>المجموع قبل الضريبة:</td>
          <td style="text-align: left; font-weight: 700;">${Number(inv.subtotal).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</td>
        </tr>
        <tr>
          <td>ضريبة القيمة المضافة (${inv.taxRate}%):</td>
          <td style="text-align: left; font-weight: 700;">${Number(inv.taxAmount).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</td>
        </tr>
        <tr class="grand-total">
          <td>الإجمالي النهائي المستحق:</td>
          <td style="text-align: left;">${Number(inv.totalAmount).toLocaleString("en-US", { minimumFractionDigits: 2 })} ر.س</td>
        </tr>
      </table>
    </div>

    ${inv.notes ? `<div style="margin-bottom: 1.5rem; padding: 10px; background: #f8fafc; border-radius: 6px;"><strong>ملاحظات:</strong> ${escapeHtml(inv.notes)}</div>` : ""}

    <div class="inv-footer">
      <div>
        <strong>الشروط والأحكام:</strong><br>
        • هذه الفاتورة صادرة إلكترونياً من نظام عالم الشمال لإدارة النقل.<br>
        • يرجى سداد المبلغ المستحق عبر الحساب البنكي المعتمد للمؤسسة.
      </div>
      <div class="inv-signature-block">
        <div class="inv-signature-line"></div>
        <div>الختم والتوقيع المعتمد</div>
      </div>
    </div>
  `;

  $("#invoice-modal")?.classList.remove("hidden");
}

async function updateInvoiceStatus(invoiceId, newStatus) {
  try {
    await apiRequest(`/api/invoices/${encodeURIComponent(invoiceId)}/status`, {
      method: "PATCH",
      body: { status: newStatus }
    });
    await refreshServerState();
    showToast(newStatus === "PAID" ? "تم تسجيل سداد الفاتورة بنجاح." : "تم تحديث حالة الفاتورة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function init() {
  updateTodayLabel();
  populatePortFilter();
  populateTruckDriverOptions();
  populateIssueOptions();
  renderDashboard();
  renderFasahResults("");
  renderArchive("");
  renderReports();
  populateCustomerDatalist();
  populateDomesticOptions();
  renderDomesticTrips();
  renderTariffs();
  renderInvoices();
  populateInvoiceWizardCustomers();

  document.addEventListener("click", event => {
    const languageButton = event.target.closest("[data-language-toggle]");
    if (languageButton) {
      setLanguage(language === "ar" ? "en" : "ar");
      return;
    }
    const driverTab = event.target.closest("[data-driver-tab]");
    if (driverTab) return showDriverTab(driverTab.dataset.driverTab);
    const nav = event.target.closest("[data-view]");
    if (nav) return switchView(nav.dataset.view);
    const go = event.target.closest("[data-go]");
    if (go) return switchView(go.dataset.go);
    const importTemplate = event.target.closest("[data-import-template]");
    if (importTemplate) return downloadImportTemplate(importTemplate.dataset.importTemplate);
    const action = event.target.closest("[data-action]");
    if (!action) return;
    if (action.dataset.action === "pdf") printDocument(action.dataset.id);
    if (action.dataset.action === "archive") {
      switchView("archive");
      $("#archive-query").value = state.docs.find(doc => doc.id === action.dataset.id)?.documentNumber || "";
      renderArchive($("#archive-query").value);
    }
    if (action.dataset.action === "issue-clearance") {
      populateIssueOptions(action.dataset.id);
      switchView("issue");
      $("#issue-clearance").value = action.dataset.id;
      renderSelectedClearance();
      matchIssueDriverToSelectedClearance();
    }
    if (action.dataset.action === "edit-clearance") beginClearanceEdit(action.dataset.id);
    if (action.dataset.action === "edit-fasah-appointment") beginFasahAppointmentEdit(action.dataset.id);
    if (action.dataset.action === "delete-fasah-appointment") deleteFasahAppointment(action.dataset.id);
    if (action.dataset.action === "use-fasah-appointment") prepareTripFromFasahAppointment(action.dataset.id);
    if (action.dataset.action === "return") {
      const eir = action.closest(".archive-card")?.querySelector("[data-return-eir]")?.value || "";
      recordReturn(action.dataset.id, eir);
    }
    if (action.dataset.action === "complete-tracked-trip") {
      const eir = action.closest(".tracking-card")?.querySelector("[data-tracking-eir]")?.value || "";
      recordReturn(action.dataset.id, eir);
    }
    if (action.dataset.action === "cancel-tracked-trip") cancelTrackedTrip(action.dataset.id);
    if (action.dataset.action === "driver-return") recordReturn(action.dataset.id);
    if (action.dataset.action === "accept-trip") acceptDriverTrip(action.dataset.id);
    if (action.dataset.action === "advance-trip") advanceDriverTrip(action.dataset.id);
    if (action.dataset.action === "complete-trip") {
      const eir = action.closest(".driver-trip-card").querySelector("[data-eir-value]").value;
      advanceDriverTrip(action.dataset.id, eir);
    }
    if (action.dataset.action === "delete-truck") deleteTruck(action.dataset.id);
    if (action.dataset.action === "delete-driver") deleteDriver(action.dataset.id);
    if (action.dataset.action === "edit-truck") beginTruckEdit(action.dataset.id);
    if (action.dataset.action === "edit-driver") beginDriverEdit(action.dataset.id);
    if (action.dataset.action === "edit-account") beginAccountEdit(action.dataset.id);
    if (action.dataset.action === "edit-trip-expense") beginTripExpenseEdit(action.dataset.id);
    if (action.dataset.action === "delete-trip-expense") deleteTripExpense(action.dataset.id);
    if (action.dataset.action === "edit-domestic-trip") beginDomesticTripEdit(action.dataset.id);
    if (action.dataset.action === "delete-domestic-trip") deleteDomesticTrip(action.dataset.id);
    if (action.dataset.action === "edit-tariff") editTariff(action.dataset.id);
    if (action.dataset.action === "delete-tariff") deleteTariff(action.dataset.id);
    if (action.dataset.action === "print-invoice") openPrintableInvoice(action.dataset.id);
    if (action.dataset.action === "invoice-paid") updateInvoiceStatus(action.dataset.id, "PAID");
    if (action.dataset.action === "invoice-cancel") updateInvoiceStatus(action.dataset.id, "CANCELLED");
  });
  $("#fasah-search-form").addEventListener("submit", event => {
    event.preventDefault();
    renderFasahResults($("#fasah-query").value);
    renderFasahAppointments();
  });
  $("#fasah-pdf-extract-form").addEventListener("submit", handleFasahPdfPreview);
  $("#fasah-appointment-review-form").addEventListener("submit", handleFasahAppointmentSave);
  $("#fasah-appointment-cancel").addEventListener("click", cancelFasahAppointmentPreview);
  $("#clearance-form").addEventListener("submit", handleClearanceSubmit);
  $("#clearance-fetch-latest-pdf").addEventListener("click", fillClearanceFromLatestPdf);
  $("#clearance-port").addEventListener("input", updateClearancePortCity);
  $("#clearance-status").addEventListener("change", updateClearanceConfirmation);
  $("#issue-clearance").addEventListener("change", () => {
    renderSelectedClearance();
    matchIssueDriverToSelectedClearance();
  });
  $("#issue-truck").addEventListener("change", () => syncIssueTruckDriver("truck"));
  $("#issue-driver").addEventListener("change", () => syncIssueTruckDriver("driver"));
  $("#transport-attachments").addEventListener("change", event =>
    extractTransportDocumentReference(event.currentTarget)
  );
  $("#issue-form").addEventListener("submit", issueDocument);
  $("#truck-filter").addEventListener("input", renderFleet);
  $("#driver-filter").addEventListener("input", renderDrivers);
  $("#tracking-query").addEventListener("input", renderTripTracking);
  $("#tracking-filter").addEventListener("change", renderTripTracking);
  $("#refresh-tracking").addEventListener("click", () => refreshTracking(true));
  $("#archive-query").addEventListener("input", event => renderArchive(event.target.value));
  ["archive-from", "archive-to", "archive-customer", "archive-sort"].forEach(id => {
    const eventName = id === "archive-customer" ? "input" : "change";
    $(`#${id}`).addEventListener(eventName, () => renderArchive($("#archive-query").value));
  });
  $("#archive-select-all").addEventListener("change", event => {
    const visibleTrips = getFilteredArchiveDocs($("#archive-query").value);
    if (event.target.checked) {
      visibleTrips.forEach(doc => selectedArchiveTripIds.add(doc.tripId));
    } else {
      visibleTrips.forEach(doc => selectedArchiveTripIds.delete(doc.tripId));
    }
    renderArchive($("#archive-query").value);
  });
  $("#archive-results").addEventListener("change", event => {
    const checkbox = event.target.closest("[data-archive-select]");
    if (!checkbox) return;
    if (checkbox.checked) selectedArchiveTripIds.add(checkbox.dataset.id);
    else selectedArchiveTripIds.delete(checkbox.dataset.id);
    updateArchiveSelectionControls();
  });
  $("#archive-export-pdf").addEventListener("click", exportSelectedArchivePdf);
  $("#truck-form").addEventListener("submit", handleTruckSubmit);
  $("#driver-form").addEventListener("submit", handleDriverSubmit);
  $("#toggle-truck-form").addEventListener("click", () => {
    if (editingTruckId) cancelTruckEdit();
    else $("#truck-form-wrap").classList.toggle("hidden");
  });
  $("#toggle-clearance-form").addEventListener("click", () => {
    if (editingClearanceId) return cancelClearanceEdit();
    pendingFasahAppointmentId = null;
    $("#clearance-declaration-field").classList.remove("hidden");
    $("#clearance-form-wrap").classList.toggle("hidden");
    updateClearanceConfirmation();
  });
  $("#cancel-clearance-edit").addEventListener("click", cancelClearanceEdit);
  $("#export-clearances-excel").addEventListener("click", exportClearancesExcel);
  $("#toggle-driver-form").addEventListener("click", () => {
    if (editingDriverId) cancelDriverEdit();
    else $("#driver-form-wrap").classList.toggle("hidden");
  });
  $("#import-trucks-button").addEventListener("click", () => $("#import-trucks-file").click());
  $("#import-drivers-button").addEventListener("click", () => $("#import-drivers-file").click());
  $("#import-trucks-file").addEventListener("change", event => importSpreadsheet("trucks", event.currentTarget));
  $("#import-drivers-file").addEventListener("change", event => importSpreadsheet("drivers", event.currentTarget));
  $("#cancel-truck-edit").addEventListener("click", cancelTruckEdit);
  $("#cancel-driver-edit").addEventListener("click", cancelDriverEdit);
  $("#truck-rows").addEventListener("change", async event => {
    if (event.target.matches(".truck-select")) {
      if (event.target.checked) selectedTruckIds.add(event.target.dataset.id);
      else selectedTruckIds.delete(event.target.dataset.id);
      updateBulkControls("trucks", $$(".truck-select", $("#truck-rows")).map(item => item.dataset.id));
      return;
    }
    const truck = truckById(event.target.dataset.id);
    if (!truck) return;
    if (event.target.matches(".truck-status")) {
      if (state.docs.some(doc => doc.truckId === truck.id && doc.requestStatus === "PENDING") && event.target.value !== "ASSIGNED") {
        renderFleet();
        return showToast("لا يمكن تغيير حالة شاحنة مرتبطة بطلب بانتظار قبول السائق.", true);
      }
      try {
        await apiRequest(`/api/trucks/${encodeURIComponent(truck.id)}`, {
          method: "PATCH",
          body: { status: event.target.value }
        });
        await refreshServerState();
        showToast("تم تحديث حالة السيارة.");
      } catch (error) {
        await refreshServerState();
        showToast(error.message, true);
      }
    } else if (event.target.matches(".truck-driver")) {
      if (state.docs.some(doc => doc.truckId === truck.id && doc.requestStatus === "PENDING")) {
        renderFleet();
        return showToast("لا يمكن تغيير سائق الشاحنة قبل قبول الطلب أو إلغائه.", true);
      }
      const driver = driverById(event.target.value);
      if (event.target.value && !driver) return showToast("تعذر العثور على السائق المحدد.", true);
      try {
        await apiRequest(`/api/trucks/${encodeURIComponent(truck.id)}`, {
          method: "PATCH",
          body: { driverId: event.target.value || null }
        });
        await refreshServerState();
        showToast("تم تحديث السائق المعيّن للسيارة.");
      } catch (error) {
        await refreshServerState();
        showToast(error.message, true);
      }
    } else {
      return;
    }
  });
  $("#driver-rows").addEventListener("change", event => {
    if (!event.target.matches(".driver-select")) return;
    if (event.target.checked) selectedDriverIds.add(event.target.dataset.id);
    else selectedDriverIds.delete(event.target.dataset.id);
    updateBulkControls("drivers", $$(".driver-select", $("#driver-rows")).map(item => item.dataset.id));
  });
  $("#select-all-trucks").addEventListener("change", event => {
    selectVisibleRecords("trucks", $$(".truck-select", $("#truck-rows")).map(item => item.dataset.id), event.target.checked);
  });
  $("#select-all-drivers").addEventListener("change", event => {
    selectVisibleRecords("drivers", $$(".driver-select", $("#driver-rows")).map(item => item.dataset.id), event.target.checked);
  });
  $("#delete-selected-trucks").addEventListener("click", deleteSelectedTrucks);
  $("#delete-selected-drivers").addEventListener("click", deleteSelectedDrivers);
  $("#clear-selected-trucks").addEventListener("click", () => clearSelection("trucks"));
  $("#clear-selected-drivers").addEventListener("click", () => clearSelection("drivers"));
  $("#admin-setup-form").addEventListener("submit", setupFirstAdmin);
  $("#login-form").addEventListener("submit", login);
  $("#admin-logout").addEventListener("click", logout);
  $("#driver-logout").addEventListener("click", logout);
  $("#driver-expense-form").addEventListener("submit", handleTripExpenseSubmit);
  $("#expense-edit-form")?.addEventListener("submit", handleTripExpenseEditSubmit);
  $("#expense-edit-cancel")?.addEventListener("click", cancelTripExpenseEdit);
  $("#account-role").addEventListener("change", updateAccountRoleFields);
  $("#account-form").addEventListener("submit", handleAccountSubmit);
  $("#cancel-account-edit").addEventListener("click", cancelAccountEdit);
  ["filter-from", "filter-to", "filter-port", "filter-customer", "filter-return"].forEach(id => {
    $(`#${id}`).addEventListener("input", renderReports);
    $(`#${id}`).addEventListener("change", renderReports);
  });
  $("#clear-filters").addEventListener("click", clearReportFilters);
  $("#export-excel").addEventListener("click", exportExcel);

  // Domestic Trips listeners
  $("#toggle-domestic-form")?.addEventListener("click", () => {
    if (editingDomesticTripId) {
      cancelDomesticTripEdit();
      return;
    }
    $("#domestic-form-wrap")?.classList.toggle("hidden");
    populateDomesticOptions();
  });
  $("#cancel-domestic-button")?.addEventListener("click", cancelDomesticTripEdit);
  $("#domestic-trip-form")?.addEventListener("submit", handleDomesticTripSubmit);
  $("#domestic-filter")?.addEventListener("input", event => renderDomesticTrips(event.target.value));
  $("#domestic-driver")?.addEventListener("change", () => syncDomesticTruckDriver("driver"));
  $("#domestic-truck")?.addEventListener("change", () => syncDomesticTruckDriver("truck"));

  // Tariff auto-lookup on Port issue form
  $("#issue-customer")?.addEventListener("input", autoLookupIssueTariff);
  $("#issue-destination")?.addEventListener("input", autoLookupIssueTariff);

  // Tariffs listeners
  $("#toggle-tariff-form")?.addEventListener("click", () => {
    if (editingTariffId) cancelTariffEdit();
    else $("#tariff-form-wrap")?.classList.toggle("hidden");
  });
  $("#cancel-tariff-button")?.addEventListener("click", cancelTariffEdit);
  $("#tariff-form")?.addEventListener("submit", handleTariffSubmit);
  $("#tariff-search")?.addEventListener("input", event => renderTariffs(event.target.value));

  // Invoices listeners
  $("#toggle-invoice-wizard")?.addEventListener("click", () => {
    $("#invoice-wizard-wrap")?.classList.toggle("hidden");
    populateInvoiceWizardCustomers();
  });
  $("#close-invoice-wizard")?.addEventListener("click", () => {
    $("#invoice-wizard-wrap")?.classList.add("hidden");
  });
  $("#invoice-wizard-customer")?.addEventListener("change", event => {
    renderUnbilledTripsForCustomer(event.target.value);
  });
  $("#invoice-wizard-tax-rate")?.addEventListener("input", calculateInvoiceWizardTotals);
  $("#invoice-select-all-trips")?.addEventListener("click", () => {
    const checks = $$(".trip-invoice-check", $("#invoice-unbilled-rows"));
    const allChecked = checks.length > 0 && checks.every(c => c.checked);
    checks.forEach(c => c.checked = !allChecked);
    calculateInvoiceWizardTotals();
  });
  $("#invoice-master-checkbox")?.addEventListener("change", event => {
    $$(".trip-invoice-check", $("#invoice-unbilled-rows")).forEach(c => c.checked = event.target.checked);
    calculateInvoiceWizardTotals();
  });
  $("#invoice-unbilled-rows")?.addEventListener("change", event => {
    if (event.target.matches(".trip-invoice-check")) {
      calculateInvoiceWizardTotals();
    }
  });
  $("#generate-invoice-button")?.addEventListener("click", handleGenerateInvoice);
  $("#invoice-search")?.addEventListener("input", event => renderInvoices(event.target.value));

  // Invoice Modal actions
  $("#print-invoice-btn")?.addEventListener("click", () => window.print());
  $("#close-invoice-modal-btn")?.addEventListener("click", () => $("#invoice-modal")?.classList.add("hidden"));
  $("#invoice-modal-backdrop")?.addEventListener("click", () => $("#invoice-modal")?.classList.add("hidden"));

  setAccountFormMode(false);
  updateAccountRoleFields();
  renderAccounts();
  restoreSessionOrShowLogin();
}

init();
localizeDocument();
new MutationObserver(() => localizeDocument()).observe(document.body, {
  childList: true,
  characterData: true,
  subtree: true
});
window.setInterval(() => {
  if (currentAccount?.role === "ADMIN" && !document.hidden && $("#view-tracking").classList.contains("active")) {
    refreshTracking();
  }
}, 30000);
