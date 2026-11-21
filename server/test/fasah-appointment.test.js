import test from "node:test";
import assert from "node:assert/strict";
import { parseFasahAppointmentItems } from "../src/utils/fasah-appointment.js";

function item(str, x, y) {
  return { str, transform: [1, 0, 0, 1, x, y] };
}

test("Fasah appointment PDF text is mapped to booking, vehicle, driver, and exit fields", () => {
  const fields = parseFasahAppointmentItems([
    item("Appointment Confirmation Ticket", 194, 809),
    item("Operator Ticket Number", 25, 661),
    item("Booking Reference Number", 272, 661),
    item("TAS20261103104712829", 466, 646),
    item("Zone / Gate ID / Name", 25, 631),
    item("King Abdullah Port Container Terminal / PDC", 126, 616),
    item("Port Contractor Name / ID", 25, 601),
    item("50 / New National Container Terminal", 149, 586),
    item("Port", 272, 631),
    item("King Abdullah Port Customs", 487, 616),
    item("Appointment Date & Time", 272, 601),
    item("2026-11-03 14:00", 498, 586),
    item("Vehicle Plate Number", 25, 526),
    item("A B C 4318", 221, 511),
    item("Vehicle Plate Type", 25, 496),
    item("Public Transport", 238, 481),
    item("Major Color", 25, 466),
    item("White", 244, 451),
    item("Vehicle Ref ID", 272, 526),
    item("839196220", 525, 511),
    item("Vehicle Serial ID", 272, 496),
    item("839196221", 525, 481),
    item("Vehicle Maker Model", 272, 466),
    item("Driver Name / Mobile Number", 25, 421),
    item("Ibrahim / 966595185374", 142, 406),
    item("Driver License Number", 272, 421),
    item("2191772447", 520, 406),
    item("Entry Information", 25, 391),
    item("Location Within Port", 25, 361),
    item("BL No", 149, 361),
    item("Declaration No / Container No", 272, 361),
    item("Cargo Type / Purpose", 442, 361),
    item("Containerized AR / Import", 467, 331),
    item("Exit Information", 25, 316),
    item("Location Within Port", 25, 286),
    item("BL No", 149, 286),
    item("Declaration No / Container No", 272, 286),
    item("Cargo Type / Purpose", 442, 286),
    item("MEDUAAJ56762", 189, 252),
    item("59876 / TGBU 6024495", 335, 252),
    item("Containerized AR / Import", 467, 252)
  ]);

  assert.equal(fields.bookingReferenceNumber, "TAS20261103104712829");
  assert.equal(fields.portContractorId, "50");
  assert.equal(fields.portName, "King Abdullah Port Customs");
  assert.equal(fields.appointmentDate, "2026-11-03");
  assert.equal(fields.appointmentTime, "14:00");
  assert.equal(fields.vehiclePlateNumber, "A B C 4318");
  assert.equal(fields.driverMobileNumber, "966595185374");
  assert.equal(fields.exitBlNumber, "MEDUAAJ56762");
  assert.equal(fields.exitDeclarationNumber, "59876");
  assert.equal(fields.exitContainerNumber, "TGBU6024495");
  assert.equal(fields.exitCargoType, "Containerized AR / Import");
  assert.deepEqual(fields.missingFields, []);
});
