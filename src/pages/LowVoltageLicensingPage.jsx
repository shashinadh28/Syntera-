import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LowVoltageLicensingPage() {
  useEffect(() => { document.title = 'Low Voltage and Security Licensing | Syntera Consulting'; }, []);

  const rows = [
    { state:'Alaska', agency:'Alaska Construction Contractors Program of the Division of Corporations, Business and Professional Licensing', type:'Low Voltage Alarm or Signaling Device Specialty Contractor', tek:'178602', gs:'NOT LICENSED' },
    { state:'Arizona', agency:'Arizona Board of Technical Registration', type:'Alarm Firm', tek:'19810-0', gs:'22675-0' },
    { state:'Arizona', agency:'Arizona Registrar of Contractors', type:'CR-67 Low Voltage', tek:'306641', gs:'331007' },
    { state:'California', agency:'California Bureau of Security and Investigative Services', type:'Alarm Company Operator', tek:'7284', gs:'7975' },
    { state:'California', agency:'California Contractors State Licensing Board', type:'C7 Low Voltage Systems', tek:'984590', gs:'NOT LICENSED' },
    { state:'Florida', agency:'Florida Department of Business and Professional Regulation, Electrical Contractors\' Licensing Board', type:'Certified Alarm System Contractor II', tek:'NOT LICENSED', gs:'EG13000868' },
    { state:'Georgia', agency:'Georgia State Construction Industry Licensing Board', type:'Low Voltage – Unrestricted', tek:'NOT LICENSED', gs:'LVU407133' },
    { state:'Indiana', agency:'City of Hobart', type:'Security Alarms Subcontractor', tek:'CL-6739', gs:'CL-6794' },
    { state:'Indiana', agency:'Town of Merrillville, Planning & Building Department', type:'Low Voltage Installation Type B Subcontractor', tek:'CON2013-11381', gs:'CON2020-00005' },
    { state:'Iowa', agency:'Iowa Department of Inspections, Appeals, and Licensing (DIAL)', type:'Contractor Registration', tek:'C134583', gs:'C137578' },
    { state:'Iowa', agency:'Iowa Department of Inspections, Appeals, and Licensing', type:'Alarm System Contractor', tek:'NOT LICENSED', gs:'AS-2332' },
    { state:'Kansas', agency:'Topeka Police Department, Alarm Licensing', type:'Alarm Installation', tek:'2202', gs:'NOT LICENSED' },
    { state:'Maryland', agency:'Maryland State Police, Licensing Division', type:'Security Systems Agency', tek:'22PLU-SS17862', gs:'23PLU-SS32928' },
    { state:'Michigan', agency:'Michigan Department of Licensing and Regulatory Affairs (LARA)', type:'Security Alarm Agency', tek:'NOT LICENSED', gs:'3601303581' },
    { state:'Minnesota', agency:'Minnesota Department of Labor and Industry, Construction Codes and Licensing Division', type:'Technology System Contractor License', tek:'NOT LICENSED', gs:'TS773956' },
    { state:'Mississippi', agency:"Mississippi Electronic Protection Division of the State Fire Marshal's Office", type:'Class A Contracting Company', tek:'NOT LICENSED', gs:'15041781' },
    { state:'New York', agency:'New York Department of State, Division of Licensing Services', type:'Alarm Installer (Statewide)', tek:'12000331754', gs:'12000385957' },
    { state:'Ohio', agency:'State of Ohio Department of Commerce, Division of State Fire Marshal', type:'Fire Protection Company Certification', tek:'53.31.3428', gs:'NOT LICENSED' },
    { state:'Pennsylvania', agency:'Pennsylvania Office of Attorney General, Bureau of Consumer Protection', type:'Home Improvement Contractor Registration', tek:'PA154734', gs:'PA152215' },
    { state:'Tennessee', agency:'Tennessee Department of Commerce and Insurance, Alarm Systems Contractors Board', type:'Alarm Systems Contractor, Burglar Alarm & CCTV', tek:'NOT LICENSED', gs:'2468' },
    { state:'Texas', agency:'Texas Department of State, Department of Public Safety, Private Security', type:'Burglar Alarm License', tek:'B17958', gs:'B13749801' },
    { state:'Texas', agency:'Texas Department of Insurance State Fire Marshal', type:'Fire Marshal Alarm Certification', tek:'ACR-1820621', gs:'NOT LICENSED' },
    { state:'Virginia', agency:'Virginia Department of Criminal Justice Services', type:'Private Security Service Business License', tek:'11-6525', gs:'11-18165' },
    { state:'Wyoming', agency:'State of Wyoming Department of Fire Prevention and Electrical Safety', type:'LV-G (Low Voltage General) Contractor', tek:'NOT LICENSED', gs:'L-80206' },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FB] pt-28 pb-20 px-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link to="/" className="text-sm text-blue-600 hover:underline">← Home</Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b3f] mb-3 leading-tight">
          Low Voltage and Security Licensing
        </h1>
        <p className="text-lg text-[#475569] mb-8">Alarm/Contractor Licenses for Security and Low Voltage Electrical Industry</p>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#0b1b3f] text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">State</th>
                  <th className="px-4 py-3 font-semibold">State Agency</th>
                  <th className="px-4 py-3 font-semibold">Type of License</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">TEKsystems, Inc.</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">TEKsystems Global Services, LLC</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-[#0b1b3f] whitespace-nowrap">{r.state}</td>
                    <td className="px-4 py-3 text-[#475569]">{r.agency}</td>
                    <td className="px-4 py-3 text-[#475569]">{r.type}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={r.tek === 'NOT LICENSED' ? 'text-slate-400 italic' : 'text-[#0b1b3f] font-medium'}>{r.tek}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={r.gs === 'NOT LICENSED' ? 'text-slate-400 italic' : 'text-[#0b1b3f] font-medium'}>{r.gs}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
