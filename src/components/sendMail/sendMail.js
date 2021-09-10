// import React from "react";

// var sendMail = {
//   sendEmail(subject, to, body) {
//     /* SmtpJS.com - v3.0.0 */
//     let Email = {
//       send: function (a) {
//         return new Promise(function (n, e) {
//           (a.nocache = Math.floor(1e6 * Math.random() + 1)),
//             (a.Action = "Send");
//           var t = JSON.stringify(a);
//           Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
//             n(e);
//           });
//         });
//       },
//       ajaxPost: function (e, n, t) {
//         var a = Email.createCORSRequest("POST", e);
//         a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
//           (a.onload = function () {
//             var e = a.responseText;
//             null != t && t(e);
//           }),
//           a.send(n);
//       },
//       ajax: function (e, n) {
//         var t = Email.createCORSRequest("GET", e);
//         (t.onload = function () {
//           var e = t.responseText;
//           null != n && n(e);
//         }),
//           t.send();
//       },
//       createCORSRequest: function (e, n) {
//         var t = new XMLHttpRequest();
//         return (
//           "withCredentials" in t
//             ? t.open(e, n, !0)
//             : "undefined" != typeof XDomainRequest
//             ? (t = new XDomainRequest()).open(e, n)
//             : (t = null),
//           t
//         );
//       },
//     };

//     Email.send({
//       SecureToken: '2CB6D702CDECE98F34C2BA3A72EC7315ECF3', // write your secure token
//       To: to, // to include multiple emails you need to mention an array
//       From: 'jckjonas14@gmail.com',
//       Subject: subject,
//       Body: body,
//     }).then((message) => {
//       // alert(message);
//     });
//   },
// };

// export default sendMail;
