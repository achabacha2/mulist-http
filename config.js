module.exports = {
	port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 443,
	host: process.env.OPENSHIFT_NODEJS_IP || null,
  https: true,
}
