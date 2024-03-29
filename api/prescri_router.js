import express from 'express';
import {addPrescriptionToMedicalRecord,getPrescriptionsFromMedicalRecord}  from '../controlers/prescri_controler.js';

const router=express.Router();


router.post('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/prescriptions', addPrescriptionToMedicalRecord);
router.get('/doctors/:doctorId/patients/:patientId/medical-records/:recordId/prescriptions', getPrescriptionsFromMedicalRecord);
export default router;