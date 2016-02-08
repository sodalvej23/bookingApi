package gladkrop.regnskab.filters;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by mhans on 06-02-2016.
 */
public class corsFilter implements Filter {
    private static final Logger LOG = LoggerFactory.getLogger(corsFilter.class);

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse) response;
        addOriginHeaders(res);
        try {
            chain.doFilter(request, response);
        } finally {
            if (!res.containsHeader("Access-Control-Allow-Origin") && !res.isCommitted()) {
                addOriginHeaders(res);
            }
        }
    }

    @Override
    public void destroy() {
        // No clean up
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        LOG.info("OriginFilter initialized");
    }

    private void addOriginHeaders(HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        response.addHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Log-Token, X-Client-Version, Authorization");
        response.addHeader("Access-Control-Expose-Headers", "Location, X-Log-Token");
    }

}